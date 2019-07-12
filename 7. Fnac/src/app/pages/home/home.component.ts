import { Component, OnInit } from '@angular/core';
import { films } from '../../../assets/mocks/films';
import { IFilm } from '../../core/models/film.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public films: IFilm[];

  constructor() {
    this.films = films;
    console.log(this.films);
  }

  ngOnInit() {
  }

}
