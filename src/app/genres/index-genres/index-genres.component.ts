import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { genreDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css']
})
export class IndexGenresComponent implements OnInit {

  // inject service - GenresService
  constructor(private genresService :GenresService) { 
    
  }

  // genres from webapi
  genres: genreDTO[];
  columnsToDisplay = [
    'name', 'actions'
  ];
  ngOnInit(): void {
    // whenever changes render to the page this onInit will be executing 
    this.loadGenres();
  }

  // delete genre by selected id
  delete(id:number) {
    this.genresService.delete(id).subscribe(()=>{
      this.loadGenres();
    });
  }
  // get all genres 
  loadGenres(){
    const genre_getAll = this.genresService.getAll().subscribe(genres => {
      this.genres = genres;
    });
  }

}
