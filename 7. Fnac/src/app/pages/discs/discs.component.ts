import { Component, OnInit } from '@angular/core';
import { discs } from '../../../assets/mocks/discs';
import { IDisc } from '../../core/models/disc.interface';

@Component({
  selector: 'app-discs',
  templateUrl: './discs.component.html',
  styleUrls: ['./discs.component.scss']
})
export class DiscsComponent implements OnInit {
  public discs: IDisc[];
  constructor() {
    this.discs = discs;
  }
  ngOnInit() {
  }

}


