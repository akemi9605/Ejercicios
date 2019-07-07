import { Component, OnInit } from '@angular/core';
interface Social {
  url: string,
  img: string
}
@Component({
  selector: 'app-follow-block',
  templateUrl: './follow-block.component.html',
  styleUrls: ['./follow-block.component.sass']
})
export class FollowBlockComponent implements OnInit {
  public social: Social[] = [
    {
      url: "www.facebook.com", img: "https://png.pngtree.com/element_our/sm/20180301/sm_5a9794da1b10e.png"
    },
    {
      url: "www.twitter.com", img: "https://i1.wp.com/marsfallpodcast.com/wp-content/uploads/2017/09/Twitter-Download-PNG.png?ssl=1"
    }, {
      url: "www.instagram.com", img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png"
    }, {
      url: "www.linkedin.com", img: "https://fatimamartinez.es/wp-content/uploads/2019/02/Logo-Linkedin.png"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
