import { Component, OnInit } from '@angular/core';
import { games } from '../../../assets/mocks/games';
import { IGame } from '../../core/models/game.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public games: IGame[];

  constructor() {

    this.games = games;
  }
  ngOnInit() {
  }

}

