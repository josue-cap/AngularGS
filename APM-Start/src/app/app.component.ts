import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{pageTitle}}</a>
      <ul class="nav nav-pills">
        <li class="nav-link" routerLink="/welcome">Home</li>
        <li class="nav-link" routerLink="/products">Product List</li>
      </ul>
    </nav>
    <div></div>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent {
  pageTitle = 'Angular: Getting Started';
}
