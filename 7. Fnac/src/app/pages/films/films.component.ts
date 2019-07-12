import { Component, OnInit } from '@angular/core';
import { films } from '../../../assets/mocks/films';
import { IFilm } from '../../core/models/film.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  public films: IFilm[];

  constructor() {
    this.films = films;
  }

  ngOnInit() {
  }

}
