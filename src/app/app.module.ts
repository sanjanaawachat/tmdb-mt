import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
