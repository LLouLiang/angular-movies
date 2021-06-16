import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { genreCreationDTO, genreDTO } from './genres.model';

@Injectable({ // decorator
  providedIn: 'root' // means we can use this service as singleton through our application
})
export class GenresService {

  // inject httpClient to enable web api call
  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + "genres/";
  
  getAll_local(): genreDTO[] {
    return [{id : 1, name : "Action"}];
  }
  // get all genre list
  // inject to index-genre component
  getAll(): Observable<genreDTO[]> {
    // To hide or not to put hard code web api endpoints as parameter, go to environments/environment.ts
    // get is return an observable result, need to subscribe it
    return this.http.get<genreDTO[]>(this.apiURL);
  }
  createGenre(genre: genreCreationDTO) { // because genreCreationDTO only name
    return this.http.post(this.apiURL, genre);
  }
  getById(id:number):Observable<genreDTO> {
    return this.http.get<genreDTO>(`${this.apiURL}${id}`);
  }

  edit(id: number, genre: genreCreationDTO) {
    return this.http.put(`${this.apiURL}${id}`,genre);
  }
  delete(id:number) {
    return this.http.delete(`${this.apiURL}${id}`);
  }
}
