import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { actorsMovieDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor(private actorsService: ActorsService) { }
  control: FormControl = new FormControl();
  actorsToDisplay: actorsMovieDTO[] = [];
  ngOnInit(): void {
    /**
    * Comments because of in memory data
    */
    // this.control.valueChanges.subscribe(value => {
    //   this.actors = this.originalActors;
    //   this.actors = this.actors.filter(actor => actor.name.indexOf(value) !== -1);
    // });
    this.control.valueChanges.subscribe( value => {
      this.actorsService.searchByName(value).subscribe(actors => {
        this.actorsToDisplay = actors
      });
    });
  }  
  /**
   * Comments because of in memory data
  */
  // actors = [
  //   {name:'Eren Yeager', picture:'https://m.media-amazon.com/images/M/MV5BZDdhMWJkMjgtMzAzYy00OGZmLWE2MGMtNWM3MTg0Y2FiNWEyXkEyXkFqcGdeQXVyNjM4MDEwMzc@._V1_UY100_CR39,0,100,100_AL_.jpg'},
  //   {name:'Mikasa Ackerman', picture:'https://m.media-amazon.com/images/M/MV5BODc5YWE5ODQtNTU4Yi00NGYzLTg4MjMtOGFkNWJhMzg2NmUyXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_UY100_CR16,0,100,100_AL_.jpg'},
  //   {name:'Armin Arlelt', picture:'https://m.media-amazon.com/images/M/MV5BM2Q2YWY5OGItOTMxYS00MWJhLWE0ZWUtNGQ5MzQyYzJjZDc2XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_UY100_CR16,0,100,100_AL_.jpg'},
  //   {name:'Reiner Braun', picture:'https://m.media-amazon.com/images/M/MV5BMWUxZWJhZmItMTE3Yy00YzYzLThlMGItNzJmODVmMGJjNGVmXkEyXkFqcGdeQXVyODg2Mjc5MjA@._V1_UY100_CR37,0,100,100_AL_.jpg'},
  //   {name:'Jean Kirschtein', picture:'https://m.media-amazon.com/images/M/MV5BZjgwMzg1NWEtMDY0Mi00MmY3LTgzYjUtOTgyYmUyYTRhYjA4XkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_UY100_CR39,0,100,100_AL_.jpg'},
  //   {name:'Hange Zoe', picture:'https://m.media-amazon.com/images/M/MV5BYTgwMTI3MTgtNmNkNS00MjIwLWI3MmItMTRmODE1NjhkYzgyXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_UY100_CR39,0,100,100_AL_.jpg'},
  //   {name:'Levi Ackerman', picture:'https://m.media-amazon.com/images/M/MV5BMTYwYmE0MjgtYWQwYy00OGFiLThjNDMtZWIxZmE1Zjk1OGRmXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_UY100_CR39,0,100,100_AL_.jpg'}
  // ];
  // originalActors = this.actors;

  @Input()
  selectedActors:actorsMovieDTO[] = [];
  columnsToDisplay = ['picture','name','character','actions'];

  @ViewChild(MatTable) table: MatTable<any>;

  optionSelected(event:MatAutocompleteSelectedEvent){
    this.control.patchValue('');
    if(this.selectedActors.findIndex(x=>x.id == event.option.value.id)!== -1) {
      return;
    }
    this.selectedActors.push(event.option.value);
    if(this.table !== undefined) {
      // Rendering the table row changes to the view
      this.table.renderRows();
    }
  }
  remove(actor){
    const index = this.selectedActors.findIndex(a => a.name === actor.name);
    this.selectedActors.splice(index,1);
    this.table.renderRows();
  }
  dropped(event: CdkDragDrop<any[]>){
    const perviousIndex = this.selectedActors.findIndex(actor => actor === event.item.data);
    // Method moveItemInArray is an interface from material drag and drop package
    moveItemInArray(this.selectedActors, perviousIndex, event.currentIndex);
    this.table.renderRows();
  }
}
