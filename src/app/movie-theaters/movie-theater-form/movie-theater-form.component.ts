import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap } from 'src/app/utilitise/coordinate.model';
import { movieTheaterCreationDTO, movieTheaterDTO } from '../movie-theater.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {
  // This is movie theater general form
  constructor(private formBuilder: FormBuilder) { }
  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      address:'',
      latitude: ['', {
        validators: [Validators.required]
      }],
      longitude:['', {
        validators: [Validators.required]
      }]
    });
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
    if(this.model !== undefined){
      this.form.patchValue(this.model);
      this.initialCoordinate.push({latitude:this.model.latitude, longitude:this.model.longitude});
    }
  } 
  @Input()
  model: movieTheaterDTO;

  initialCoordinate: coordinatesMap[] = [];

  @Output()
  onSaveChanges = new EventEmitter<movieTheaterCreationDTO>();
  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

  selectedLocation(coordinatesMap:coordinatesMap){
    this.form.patchValue(coordinatesMap);
  }
}
