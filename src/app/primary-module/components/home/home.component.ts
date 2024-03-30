import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  redirectToForm() {
    window.open('https://forms.gle/or6FsrfnGbNPSDXd6', '_blank');
  }
}
