import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { format } from 'node:path';
import { fromEventPattern, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFromData } from '../utilitise/utils';
import { actorCreationDTO, actorDTO, actorsMovieDTO } from './actors.model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private apiURL = environment.apiURL + 'actors';

  constructor(private http: HttpClient) { }

  private buildFormData(actor: actorCreationDTO): FormData {
    const formdata = new FormData();
    // will be using in the request to webapi [FromForm]
    formdata.append('name',actor.name);
    if(actor.biography) {
      formdata.append('biography',actor.biography);
    }
    if(actor.dateOfBirth) {
      formdata.append('dateOfBirth', formatDateFromData(actor.dateOfBirth));
    }
    if(actor.picture) {
      formdata.append('picture',actor.picture);
    }
    return formdata;
  }
  create(actor: actorCreationDTO) {
    const formdata = this.buildFormData(actor);
    return this.http.post(this.apiURL, formdata);
  }
  /*
  * Updated because of pagination
  */
  // get(): Observable<actorDTO[]>{
  //   return this.http.get<actorDTO[]>(this.apiURL);
  // }
  get(page: number, recordsPerPage:number): Observable<any>{ // page = 1, recored
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<actorDTO[]>(this.apiURL,{observe:'response', params});
  }

  public searchByName(name:string):Observable<actorsMovieDTO[]> {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post<actorsMovieDTO[]>(`${this.apiURL}/SearchByName`,JSON.stringify(name), {headers});
  }

  public getById(id: number): Observable<actorDTO>{
    return this.http.get<actorDTO>(`${this.apiURL}/${id}`);
  }

  public edit(id:number, actor: actorCreationDTO){
    const formdata = this.buildFormData(actor);
    return this.http.put(`${this.apiURL}/${id}`,formdata);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
