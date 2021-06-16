import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { genreCreationDTO,genreDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private genresService: GenresService, private activatedRoute: ActivatedRoute, private router: Router) { }
  model: genreDTO;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.genresService.getById(params.id).subscribe(genre => {
        this.model = genre;
      })
    });
  }

  saveChanges(genreDTO: genreCreationDTO) {
    this.genresService.edit(this.model.id, genreDTO).subscribe(()=>{
      this.router.navigate(['/genres']);
    });
  }
 
}
