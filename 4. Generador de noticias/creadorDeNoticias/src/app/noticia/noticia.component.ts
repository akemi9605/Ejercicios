import { Component, OnInit, Input } from '@angular/core';
interface Noticia {
  title: string
  paragraph: string,
};

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {
  @Input() title: string = null;
  @Input() paragraph: string = null;

  constructor() { }

  ngOnInit() {
  }

}
