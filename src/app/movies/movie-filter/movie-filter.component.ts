import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form: FormGroup;
  /**
   * Will be getting from database web api
   */
  genres = [{id: 1,name:'drama'}, {id:2, name:'comedy'}];
  movies = [{title:"Attack on Titan: The Roar of Awakening", poster:'https://m.media-amazon.com/images/M/MV5BZjNjYTlmYWYtMGY3Zi00NzhkLTliZDQtYTNhNTZjNzViNzYyXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_UY268_CR5,0,182,268_AL_.jpg'},
  {title:"Shingeki no kyojin", poster:'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_UX182_CR0,0,182,268_AL_.jpg'},
  {title:"Shingeki no kyojin Movie", poster:'https://m.media-amazon.com/images/M/MV5BNDYyNTAyYjEtNmY1Yy00Y2U5LTg1OTktYjU0ZjBjODA3MDcyXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_UY268_CR9,0,182,268_AL_.jpg'},
  {title:"Attack on Titan Part 1", poster:'https://m.media-amazon.com/images/M/MV5BZDk5MTcxZmItYWM2Ny00NjIwLWE2YWQtYjczMWFiZThjN2JkXkEyXkFqcGdeQXVyNDQyNzIwNDQ@._V1_UY268_CR3,0,182,268_AL_.jpg'}];
  /**************************************************/

  orginalMovies = this.movies;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title:'',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });
    // observerable
    this.form.valueChanges
    .subscribe(values => {
      // listening the changes in the form
      this.movies= this.orginalMovies;
      this.filterMovies(values);
    });
  }

  filterMovies(values:any) {
    if(values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
  }

  clearForm(){
    this.form.reset();
  }

}
