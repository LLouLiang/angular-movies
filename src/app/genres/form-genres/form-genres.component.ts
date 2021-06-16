import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { firstLetterUpperCase } from 'src/app/Validators/firstLetterUpperCase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genres',
  templateUrl: './form-genres.component.html',
  styleUrls: ['./form-genres.component.css']
})
export class FormGenresComponent implements OnInit {

  constructor(private router: Router, private formbuilder: FormBuilder) { }
  form: FormGroup;
  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();
  // input model data is coming form edit-genre form
  @Input()
  model: genreCreationDTO;
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name: ['',{
        //validators:[Validators.required, Validators.minLength(3), firstLetterUpperCase()]
        validators:[Validators.required, Validators.minLength(3)] // for testing web api filter
      }]
    });
    // feed value to the form variable using the model data
    if(this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    // this.router.navigate(['/genres']);

    /// event emitter 
    this.onSaveChanges.emit(this.form.value);
  }
  getErrorMessageFieldName(){
    const field = this.form.get('name');
    if(field.hasError('required')){
      return 'the field is required';
    }
    if(field.hasError('minlength')){
      return 'Min length of input is 3';
    }

    /**
     * Customized filters
     * **/
    // if(field.hasError('firstLetterUpperCase')){
    //   return 'First character should be Capital';
    // }
    if(field.hasError('firstLetterUpperCase')){
      return field.getError('firstLetterUpperCase').message;
    }
    return '';
  }
}
