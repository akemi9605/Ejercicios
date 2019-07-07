import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent{
  //public buttonTitle: string = "Aceptar";
  @Input() buttonTitle: string = "SIN TITULO";
  @Output() userClick: EventEmitter<Date> = new EventEmitter();
  constructor() { }
  public responderClick(){
    //alert("Pulsado botón" + this.buttonTitle);
    let fechaClick: Date = new Date();
    this.userClick.next(fechaClick);
  }
}
