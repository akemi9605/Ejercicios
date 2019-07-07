import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-noticia',
  templateUrl: './form-noticia.component.html',
  styleUrls: ['./form-noticia.component.scss']
})
export class FormNoticiaComponent implements OnInit {
  @Output() escucharCrearNuevaNoticia: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  crearNoticia() {
    const title = (document.getElementById("title") as HTMLInputElement);
    console.log(title.value);

    const body = (document.getElementById("body") as HTMLTextAreaElement);
    console.log(body.value);

    const noticia = {
      title: title.value,
      body: body.value
    };

    this.escucharCrearNuevaNoticia.emit(noticia);
  }
}
