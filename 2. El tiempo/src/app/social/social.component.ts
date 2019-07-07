import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.sass']
})
export class SocialComponent implements OnInit {
  @Input() img: string = null;
  @Input() url: string = null;
  constructor() { }

  ngOnInit() {
  }

}
