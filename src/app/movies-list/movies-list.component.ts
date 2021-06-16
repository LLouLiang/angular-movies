import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit{
  ngOnInit(): void {
  };
  constructor() { }
  @Input()
  movies;
  onRemove(idx : number){
    this.movies.splice(idx,1);
  }
  /*
  this.movies = [{
        title : "attack on titan session 4",
        epsiods : 139,
        price : 9.9
      },
      {
        title : "attack on titan session 4",
        epsiods : 138,
        price : 9.9
      },
      {
        title : "attack on titan session 4",
        epsiods : 137,
        price : 9.9
      }];
  */

    
}
