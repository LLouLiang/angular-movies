import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { actorsMovieDTO } from 'src/app/actors/actors.model';
import { multipleSelectorModel } from 'src/app/utilitise/multiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movie.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Input()
  model: movieDTO;
  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  // nonSelectedGenres: multipleSelectorModel[] = [
  //   {key: 1, value: 'Drama'},
  //   {key: 2, value: 'Action'},
  //   {key: 3, value: 'Comedy'}
  // ];

  // nonSelectedTheaters: multipleSelectorModel[] = [
  //   {key: 1, value: 'AMC Newport Cemtre 11'},
  //   {key: 2, value: 'Empire Cinemas'},
  //   {key: 3, value: 'Kerasotes ShowPlace 14 Secaucus'}
  // ];
  @Input()
  nonSelectedGenres:multipleSelectorModel[] = [];
  @Input()
  nonSelectedMovieTheaters:multipleSelectorModel[] = [];
  @Input()
  selectedGenres: multipleSelectorModel[] = [];
  @Input()
  selectedTheaters: multipleSelectorModel[] = []

  @Input()
  selectedActors:actorsMovieDTO[] = [];
  

  constructor(private formBuilder: FormBuilder) { }
  form : FormGroup;
  ngOnInit(): void {
   this.form = this.formBuilder.group({
      title: ['',{
        validators: [Validators.required]
      }],
      summary:'',
      inTheaters:false,
      trailer:'',
      releaseDate:new Date(),
      poster:'',
      genreIds:'',
      movieTheaterIds:'',
      actors:'' 
    });
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }
  saveChanges(){
    // Set genre data into form
    const genreIds = this.selectedGenres.map(value => value.key);
    this.form.get('genreIds').setValue(genreIds);
    // Set theater data into form
    const theaterIds = this.selectedTheaters.map(value => value.key);
    this.form.get('movieTheaterIds').setValue(theaterIds);
    // Set actors data into form
    const actors = this.selectedActors.map(val => {id: val.id; character: val.character});
    // const actors = this.selectedActors.map(val => {
    //   return {id: val.id, character: val.character}
    // });
    this.form.get('actors').setValue(actors);

    this.onSaveChanges.emit(this.form.value);
  }
  onImageSelected(file:File){
    this.form.get('poster').setValue(file);
  }
  changeMarkdown(content:string){
    this.form.get('summary').setValue(content);
  }
}
