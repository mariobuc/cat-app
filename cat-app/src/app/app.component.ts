import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedBreedId: string | null = null;


  onBreedSelected(breedId: string): void {
    this.selectedBreedId = breedId;
  }

  constructor(public authService: AuthService, private router: Router) {

    console.log('AppComponent cargado');

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
