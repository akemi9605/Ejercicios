import { Component, OnInit } from '@angular/core';

/*interface Socials {
  url: string
};
*/
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  /*public social: Socials[] = [
    {
      url: [
        { "https://www.facebook.com"},
        { "https://www.linkedin.com"},
        { "https://www.twitter.com"},
        { "https://www.instagram.com"},
      ]
    },
  ]*/
  constructor() { }

  ngOnInit() {
  }

}
