import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moviesInTheater = [{
      title : "Shingeki no Kyojin - A Long Dream",
      epsiods : 138,
      price : 9.9,
      poster : 'https://m.media-amazon.com/images/M/MV5BMzQwZjZkMTktYzNkNC00ZWFlLWE4NGEtMjA3YTA4OTEyZWVkXkEyXkFqcGdeQXVyMTA5MTI0Mzc1._V1_UY268_CR4,0,182,268_AL_.jpg'
    },
    {
      title : "Shingeki no Kyojin - Toward TheTree On That Hill",
      epsiods : 139,
      price : 9.9,
      poster : 'https://m.media-amazon.com/images/M/MV5BODk4MzI0MjItY2Y1ZC00MmZkLTk1NDItZjQ5MjhlYTg2Yzc1XkEyXkFqcGdeQXVyNTk5Nzg0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }];
  }
  moviesInTheater;
  moviesInFuture;
}
