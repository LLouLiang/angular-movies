import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieTheaterCreationDTO, movieTheaterDTO } from '../movie-theater.model';
import { MovietheaterService } from '../movietheater.service';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, 
              private movietheaterService: MovietheaterService,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movietheaterService.getById(params.id).subscribe(movietheater=>{
        this.model = movietheater;
      });
    });
  }

  
  // model: movieTheaterDTO = {
  //   id: 1, name: 'AMC Ridgefield Park', address:'86 road', latitude:-19.870462810993907, longitude:47.027036547660835
  // }
  model: movieTheaterDTO;

  saveChanges(movieTheaterDTO: movieTheaterCreationDTO){
    this.movietheaterService.update(this.model.id, movieTheaterDTO).subscribe(()=>{
      this.router.navigate(['/movietheaters']);
    });
  }
}
