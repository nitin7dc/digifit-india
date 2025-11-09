import { Component } from '@angular/core';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  openWebPage(): void {
    window.open("https://medium.com/digifitindia", "_blank");
  }
}
