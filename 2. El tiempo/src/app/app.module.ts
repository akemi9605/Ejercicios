import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MigasComponent } from './migas/migas.component';
import { VideoteaserComponent } from './videoteaser/videoteaser.component';
import { Filavideos3Component } from './filavideos3/filavideos3.component';
import { FollowBlockComponent } from './follow-block/follow-block.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { SocialComponent } from './social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MigasComponent,
    VideoteaserComponent,
    Filavideos3Component,
    FollowBlockComponent,
    FooterComponent,
    VideoComponent,
    SocialComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
