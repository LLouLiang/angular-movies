import { Component, OnInit } from '@angular/core';
import { movieCreationDTO, movieDTO } from '../movie.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor() { }
  model: movieDTO = {
    title: 'Shingeki no kyojin: Endo obu za wârudo', 
    inTheaters: true, 
    summary: "A young boy name Eren Jaeger has to use his gift to know about the mystery of the Titans.",
    releaseDate: new Date(), 
    trailer:'Abc', 
    poster:'https://m.media-amazon.com/images/M/MV5BZDk5MTcxZmItYWM2Ny00NjIwLWE2YWQtYjczMWFiZThjN2JkXkEyXkFqcGdeQXVyNDQyNzIwNDQ@._V1_UY216_CR2,0,148,216_AL_.jpg'
  }
  ngOnInit(): void {
  }
  saveChanges(movieCreationDTO:movieCreationDTO){
    
  }
}
