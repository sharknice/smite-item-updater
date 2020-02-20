import { Component, ViewChild, NgZone } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService, private _ngZone: NgZone, private _httpClient: HttpClient, private _FileSaverService: FileSaverService) { }

  itemJson = '';

  trackById(index, item) {
    return item.id;
  }

  updateItems(items) {
    this.auth.updateItems(items);
  }

  deleteItem(item, items) {
    items = items.filter(i => i !== item);
    this.auth.updateItems(items);
  }

  duplicateItem(item, items) {
    var duplicate = JSON.parse(JSON.stringify(item));
    duplicate.id = Date.now();
    items.push(duplicate);
    this.auth.updateItems(items);
  }

  addItem(items) {
    items.push({ id: Date.now() })
    this.auth.updateItems(items);
  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  importItems(itemJson) {
    if (itemJson) {
      var items = JSON.parse(itemJson);
      this.updateItems(items);
    }
  }

  downloadItems(items) {
    if (items) {
      const fileType = this._FileSaverService.genType('items.json');
      const txtBlob = new Blob([JSON.stringify(items)], { type: fileType });
      this._FileSaverService.save(txtBlob, 'items.json');
    }
  }

  saveItemsToLocalStorage(items) {
    localStorage.setItem('developerItems', JSON.stringify(items));
  }

  loadCurrentItems() {
    this._httpClient.get('https://raw.githubusercontent.com/sharkson/smitebuilder/master/items.js').subscribe(
      data => {
        this.updateItems(data);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
