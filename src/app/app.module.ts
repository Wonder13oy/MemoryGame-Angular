import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { DisplayScreenComponent } from './display-screen/display-screen.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [AppComponent, CardsComponent, DisplayScreenComponent, TimerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
