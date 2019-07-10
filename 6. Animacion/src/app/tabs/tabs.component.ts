import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {
  public opened: boolean = false;
  @Input() title: string = null;
  @Input() body: string = null;

  constructor() { }

  ngOnInit() {
  }
  clickar() {
    this.opened = !this.opened;
  }
}
