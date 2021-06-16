import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieTheaterDTO } from '../movie-theater.model';
import { MovietheaterService } from '../movietheater.service';

@Component({
  selector: 'app-create-movie-threater',
  templateUrl: './create-movie-threater.component.html',
  styleUrls: ['./create-movie-threater.component.css']
})
export class CreateMovieThreaterComponent implements OnInit {

  constructor(private moveitheaterservice: MovietheaterService,
            private router: Router) { }

  ngOnInit(): void {
  }

  saveChange(movieTheaterDTO:movieTheaterDTO){
    this.moveitheaterservice.create(movieTheaterDTO).subscribe(()=> {
      this.router.navigate(['/movietheaters']);
    });
  }

}
