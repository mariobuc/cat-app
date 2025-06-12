import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, options = {}) {
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, options);
  }

  post<T>(endpoint: string, body: any, options = {}) {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, body, options);
  }
}
