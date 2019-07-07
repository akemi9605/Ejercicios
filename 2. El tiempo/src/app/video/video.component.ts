import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {
  @Input() h3: string = null;
  @Input() paragraph: string = "Valor por defecto";
  @Input() url: string = null;
  //para ver videos de youtube
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  //para ver videos de youtube
  getVideoIframe(url) {
    var video, results;

    if (url === null) {
      return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }


}
