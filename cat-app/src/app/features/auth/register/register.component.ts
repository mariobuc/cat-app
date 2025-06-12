import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';
  success = false;
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register({ username: this.username, password: this.password, email: this.email })
      .subscribe({
        next: () => {
          this.success = true;
          this.router.navigate(['/login']);
        },
        error: () => {
          this.error = 'Error al registrar usuario';
        }
      });
  }
}
