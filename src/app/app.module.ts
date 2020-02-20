import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ItemComponent } from './item/item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FileSaverModule } from 'ngx-filesaver';
import { OffensiveStatsComponent } from './item/offensive-stats/offensive-stats.component';
import { DefensiveStatsComponent } from './item/defensive-stats/defensive-stats.component';
import { UtilityStatsComponent } from './item/utility-stats/utility-stats.component';
import { HttpClientModule } from '@angular/common/http'; 

const firebaseConfig = {
  apiKey: "AIzaSyAwhb4SVFyFxOBYcBWyFZuxz1kwrCriyQU",
  authDomain: "smite-4957a.firebaseapp.com",
  databaseURL: "https://smite-4957a.firebaseio.com",
  projectId: "smite-4957a",
  storageBucket: "smite-4957a.appspot.com",
  messagingSenderId: "762442376517",
  appId: "1:762442376517:web:a201d12820084a65630a2c"
};

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    OffensiveStatsComponent,
    DefensiveStatsComponent,
    UtilityStatsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    FileSaverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
