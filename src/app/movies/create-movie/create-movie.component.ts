import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { multipleSelectorModel } from 'src/app/utilitise/multiple-selector.model';
import { movieCreationDTO } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(private moviesService: MoviesService, private router: Router) { }

  nonSelectedGenres: multipleSelectorModel[];
  nonSelectedMovieTheaters: multipleSelectorModel[];
  ngOnInit(): void {
    this.moviesService.postGet().subscribe(response => {
      this.nonSelectedGenres = response.genres.map(genre => {
        return <multipleSelectorModel>{key: genre.id, value: genre.name}
      });
      this.nonSelectedMovieTheaters = response.movieTheaters.map(movietheater => {
        return <multipleSelectorModel>{key: movietheater.id, value: movietheater.name}
      });
    });
  }
  saveChanges(movieCreationDTO:movieCreationDTO){
    this.moviesService.create(movieCreationDTO).subscribe(() => {
      this.router.navigate(['']);
    });
  }
} 
