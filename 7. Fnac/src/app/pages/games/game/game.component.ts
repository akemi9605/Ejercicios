import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGame } from '../../../core/models/game.interface';
import { games } from '../../../../assets/mocks/games';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public game: IGame;
  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      console.log(params);
      if (params && params.id) {
        this.game = games[params.id];
      }
    });

  }

  ngOnInit() {
  }

}
