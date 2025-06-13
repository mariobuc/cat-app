import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CatService {
  private API_URL = 'http://localhost:3000/api/cats';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any> {
    return this.http.get(`${this.API_URL}/breeds`);
  }

  getImagesByBreed(breedId: string): Observable<any> {
    return this.http.get(`${this.API_URL}/images/${breedId}`);
  }
}
