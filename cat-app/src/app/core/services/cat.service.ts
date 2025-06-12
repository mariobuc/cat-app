import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Breed {
  id: string;
  name: string;
  description?: string;
  temperament?: string;
  origin?: string;
  image?: {
    url: string;
  };
}

export interface CatImage {
  id: string;
  url: string;
  breeds: Breed[];
}

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private apiUrl = 'https://api.thecatapi.com/v1';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.apiUrl}/breeds`);
  }

  getBreedById(id: string): Observable<Breed> {
    return this.http.get<Breed>(`${this.apiUrl}/breeds/${id}`);
  }

  getImagesByBreedId(id: string): Observable<CatImage[]> {
    return this.http.get<CatImage[]>(`${this.apiUrl}/images/search?breed_id=${id}&limit=5`);
  }
}
