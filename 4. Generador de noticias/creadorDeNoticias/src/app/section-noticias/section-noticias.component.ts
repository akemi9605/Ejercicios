import { Component, OnInit } from '@angular/core';
interface Noticia {
  title: string,
  paragraph: string
}

@Component({
  selector: 'app-section-noticias',
  templateUrl: './section-noticias.component.html',
  styleUrls: ['./section-noticias.component.scss']
})
export class SectionNoticiasComponent implements OnInit {
  public noticias: Noticia[] = [];
  constructor() { }

  ngOnInit() {
  }
  anadirNoticia(noticia) {
    console.log(noticia);
    this.noticias.push(noticia);
  }
}
