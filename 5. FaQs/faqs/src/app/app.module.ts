import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { FaqItemComponent } from './faq-item/faq-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqListComponent,
    FaqItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
