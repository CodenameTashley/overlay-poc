import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ['Alice', 'Bob', 'Charlie', 'David', 'Emily'];
  public showOverlay = false;
  public toggleBodyStyles = false;

  toggleOverlay(showOverlay: boolean) {

    const bodyElement = document.querySelector('body');
    if (showOverlay) {
      if (this.toggleBodyStyles) {
        if (bodyElement) {
          bodyElement.style.position = 'fixed';
        }
      }
    } else {
      if (this.toggleBodyStyles) {
        if (bodyElement) {
          bodyElement.style.position = 'static';
        }
      }
    }

    this.showOverlay = showOverlay;
  }
}
