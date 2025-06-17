import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Breed {
  id: string;
  name: string;
  description: string;
  origin: string;
  temperament: string;
  images?: { url: string }[];
}


@Injectable({ providedIn: 'root' })
export class CatService {
  private API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any> {
    return this.http.get(`${this.API_URL}/cats/breeds`);
  }

  getBreedById(id: string): Observable<Breed> {
    return this.http.get<Breed>(`${this.API_URL}/cats/breeds/${id}`);
  }

  getImagesByBreed(breedId: string): Observable<any> {
    return this.http.get(`${this.API_URL}/images/${breedId}`);
  }

  

}
