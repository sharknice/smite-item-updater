import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;
  data$: Observable<any>;
  uid: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFireStore: AngularFirestore
  ) {
    this.user$ = this.angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.uid = user.uid;
          if (!this.data$) {
            this.setup(user.uid);
          }

          return this.angularFireStore.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  getUser() {
    return this.user$.pipe(first()).toPromise();
  }

  googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private async oAuthLogin(provider) {
    const credential = await this.angularFireAuth.auth.signInWithPopup(provider);
    await this.updateUserData(credential.user);
    await this.setup(credential.user.uid);
  }

  private async setup(uid) {
    await this.createItems(uid);
    this.data$ = this.angularFireStore.collection('data').doc(uid).valueChanges();
  }

  private updateUserData({ uid, email, displayName, photoURL }) {
    const userRef: AngularFirestoreDocument<any> = this.angularFireStore.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, { merge: true });
  }

  private createItems(uid) {
    const ref: AngularFirestoreDocument<any> = this.angularFireStore.doc(`data/${uid}`);
    return ref.set({ uid: uid }, { merge: true });
  }

  public updateItems(items) {
    const ref = this.angularFireStore.collection('data').doc(this.uid);
    return ref.update({
      items: items
    });
  }

  async signOut() {
    await this.angularFireAuth.auth.signOut();
  }

}
