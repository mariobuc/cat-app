import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user: any;

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.user = jwtDecode(token);
    }
  }
}
