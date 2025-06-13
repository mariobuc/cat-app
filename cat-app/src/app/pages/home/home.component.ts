import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <h1>Welcome to Cat App 🐱</h1>
      <p>Select a breed to view cat images or login to get started.</p>
    </div>
  `,
  styles: [`
    .home-container {
      text-align: center;
      margin-top: 100px;
    }
  `]
})
export class HomeComponent {}
