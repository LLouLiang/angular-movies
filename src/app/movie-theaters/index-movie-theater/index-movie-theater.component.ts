import { Component, OnInit } from '@angular/core';
import { MovietheaterService } from '../movietheater.service';

@Component({
  selector: 'app-index-movie-theater',
  templateUrl: './index-movie-theater.component.html',
  styleUrls: ['./index-movie-theater.component.css']
})
export class IndexMovieTheaterComponent implements OnInit {

  constructor(private movieTheaterService: MovietheaterService) { }

  movietheatersModel;
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.movieTheaterService.get().subscribe(movieTheaters => this.movietheatersModel = movieTheaters)
  }
  columnsToDisplay = ["name", "actions"];
  delete(id:number){
    this.movieTheaterService.delete(id).subscribe(()=>{
      this.loadData();
    });
  }

}
