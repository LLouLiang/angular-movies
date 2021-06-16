import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieTheaterCreationDTO, movieTheaterDTO } from './movie-theater.model';

@Injectable({
  providedIn: 'root'
})
export class MovietheaterService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'movietheater';
  
  public create(movieTheaterDTO: movieTheaterDTO) {
    return this.http.post(this.apiURL, movieTheaterDTO);
  }

  public get():Observable<movieTheaterDTO[]>{
    return this.http.get<movieTheaterDTO[]>(this.apiURL);
  }

  public getById(id:number):Observable<movieTheaterDTO>{
    return this.http.get<movieTheaterDTO>(`${this.apiURL}/${id}`);
  }
  public update(id:number, movietheaterDTO: movieTheaterCreationDTO){
    return this.http.put(`${this.apiURL}/${id}`,movietheaterDTO);
  }
  public delete(id:number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
