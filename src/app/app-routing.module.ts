import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenerComponent } from './genres/create-gener/create-gener.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { OverallComponent } from './notes/overall/overall.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { CreateMovieThreaterComponent } from './movie-theaters/create-movie-threater/create-movie-threater.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  // general
  {path:'genres', component:IndexGenresComponent},
  {path:'genres/create', component:CreateGenerComponent},
  {path:'genres/edit/:id', component:EditGenreComponent},
  // actor 
  {path:'actors', component:IndexActorsComponent},
  {path:'actors/create', component:CreateActorComponent},
  {path:'actors/edit/:id', component:EditActorComponent},
  
  // movie theater 
  {path:'movietheaters', component:IndexMovieTheaterComponent},
  {path:'movietheaters/create', component:CreateMovieThreaterComponent},
  {path:'movietheaters/edit/:id', component:EditMovieTheaterComponent},
  // movie
  {path:'movies/create', component:CreateMovieComponent},
  {path:'movies/edit/:id', component:EditMovieComponent},
  {path:'movies/filter', component:MovieFilterComponent},
  //My notes
  {path:'notes/overall', component:OverallComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
