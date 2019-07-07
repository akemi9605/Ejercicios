import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormNoticiaComponent } from './form-noticia/form-noticia.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { SectionNoticiasComponent } from './section-noticias/section-noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    FormNoticiaComponent,
    NoticiaComponent,
    SectionNoticiasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
