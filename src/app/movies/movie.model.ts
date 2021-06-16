import { actorsMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movie-theaters/movie-theater.model";

export interface movieCreationDTO{
    title:string;
    summary:string;
    inTheaters:boolean;
    trailer:string;
    releaseDate:Date;
    poster:File;
    genreIds:number[];
    movieTheaterIds:number[];
    actors: actorsMovieDTO[];
}

export interface movieDTO {
    title:string;
    summary:string;
    inTheaters:boolean;
    trailer:string;
    releaseDate:Date;
    poster:string;
}

export interface moviePostGetDTO {
    genres: genreDTO[];
    movieTheaters : movieTheaterDTO[];
}