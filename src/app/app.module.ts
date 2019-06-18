import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { DisplayScreenComponent } from './display-screen/display-screen.component';

@NgModule({
  declarations: [AppComponent, CardsComponent, DisplayScreenComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
