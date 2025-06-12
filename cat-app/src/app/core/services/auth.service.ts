import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private api: ApiService, private jwtHelper: JwtHelperService) {}

  login(username: string, password: string) {
    return this.api.get<any>(`/users/login?username=${username}&password=${password}`);
  }

  register(data: any) {
    return this.api.post('/users/register', data);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
