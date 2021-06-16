import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilitise/utils';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';
@Component({
  selector: 'app-create-gener',
  templateUrl: './create-gener.component.html',
  styleUrls: ['./create-gener.component.css']
})
export class CreateGenerComponent implements OnInit {

  constructor(private router: Router, private genresService: GenresService) { }
  ngOnInit(): void {
  }

  errors: string[] = [];
  saveChanges(genreCreationDTO: genreCreationDTO){
    //console.log(genreCreationDTO);
    this.genresService.createGenre(genreCreationDTO).subscribe(()=> {
      this.router.navigate(['/genres']); // after creating successfully, redirect to genres
    }, error => this.errors = parseWebAPIErrors(error)); // handle the error
  }
 
  // getErrorMessageFieldName(){
  //   const field = this.form.get('name');
  //   if(field.hasError('required')){
  //     return 'the field is required';
  //   }
  //   if(field.hasError('minlength')){
  //     return 'Min length of input is 3';
  //   }

  //   /**
  //    * Customized filters
  //    * **/
  //   // if(field.hasError('firstLetterUpperCase')){
  //   //   return 'First character should be Capital';
  //   // }
  //   if(field.hasError('firstLetterUpperCase')){
  //     return field.getError('firstLetterUpperCase').message;
  //   }
  //   return '';
  // }
} 
