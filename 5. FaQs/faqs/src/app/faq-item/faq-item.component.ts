import { Component, ViewEncapsulation, Input } from '@angular/core';


@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class FaqItemComponent {
  //VARIABLES
  public opened: boolean = false;
  @Input() title: string = null;
  @Input() body: string = null;
  //CONSTRUTOR
  constructor() { }

  //METODOS PRIVADOS

  //METODOS PUBLICOS
  public changeState() {

    this.opened = !this.opened;
  }

}
