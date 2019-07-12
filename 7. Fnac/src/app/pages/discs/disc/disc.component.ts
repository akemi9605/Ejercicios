import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDisc } from '../../../core/models/disc.interface';
import { discs } from '../../../../assets/mocks/discs';


@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.scss']
})
export class DiscComponent implements OnInit {
  public disc: IDisc;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params && params.id) {
        this.disc = discs[params.id];
      }
    });
  }

  ngOnInit() {
  }

}

