import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { actorCreationDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  @Output()
  onSaveChanges = new EventEmitter<actorCreationDTO>();
  @Input()
  model: actorDTO;

  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',{
        validators: [Validators.required]
      }],
      dateOfBirth: '',
      picture: '',
      biography:''
    });

    if(this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    // important need to emit the emitter
    this.onSaveChanges.emit(this.form.value);
  }

  ImageSelected(image){
    // picture here is a string
    this.form.get('picture').setValue(image);
  }

  changeMarkdown(content) {
    this.form.get('biography').setValue(content);
  }
}
