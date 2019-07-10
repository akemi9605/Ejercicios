import { Component, OnInit, ViewEncapsulation } from '@angular/core';
interface Faq {
  title: string;
  body: string;
}

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class FaqListComponent implements OnInit {
  public faqs: Faq[] = [
    {
      title: "Porque tengo mucho frio", body: "Abrigate bien"
    },
    {
      title: "Porque tengo mucho calor", body: "Tomate un helado"
    }, {
      title: "Porque tengo ljkdncvljasndcj", body: "bla bla"
    }
    , {
      title: "Porque tengo mucho sueño", body: "blu blu blu"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
