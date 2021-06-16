import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFromData } from '../utilitise/utils';
import { movieCreationDTO, moviePostGetDTO } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'movies';
  public postGet(): Observable<moviePostGetDTO> {
    return this.http.get<moviePostGetDTO>(`${this.apiURL}/PostGet`);
  }

  public create(movieCreationDTO: movieCreationDTO) {
    const formData = this.buildFormData(movieCreationDTO);
    return this.http.post(this.apiURL,formData);
  }

  private buildFormData(movie: movieCreationDTO): FormData {
    const formData = new FormData(); // this is our formdata instance
    formData.append('title', movie.title);
    formData.append('summary', movie.summary);
    formData.append('trailer', movie.trailer);
    formData.append('inTheater', String(movie.inTheaters));
    if(movie.releaseDate) {
      formData.append('releaseDate', formatDateFromData(movie.releaseDate));
    }
    if(movie.poster) {
      formData.append('poster',movie.poster);
    }
    formData.append('genresIds', JSON.stringify(movie.genreIds));
    formData.append('movieTheatersIds', JSON.stringify(movie.movieTheaterIds));
    formData.append('actors', JSON.stringify(movie.actors));
    return formData;
  }
}
