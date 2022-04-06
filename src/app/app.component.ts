import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav></nav>
  <router-outlet></router-outlet>
  `
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-fundamentals';
}
