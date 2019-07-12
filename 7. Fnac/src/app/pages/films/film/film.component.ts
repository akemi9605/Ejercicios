import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFilm } from '../../../core/models/film.interface';
import { films } from '../../../../assets/mocks/films';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  public film: IFilm;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      console.log(params);
      if (params && params.id) {
        this.film = films[params.id];
      }
    });

  }

  ngOnInit() {
  }

}
