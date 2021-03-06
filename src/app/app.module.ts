import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { DisplayScreenComponent } from './components/display-screen/display-screen.component';
import { TimerComponent } from './components/timer/timer.component';
import { CardsService } from './services/cards.service';
import { UserStatsService } from './services/user-stats.service';
import { CurrentPlayerService } from './services/current-player.service';

import { TimeLeaderboardComponent } from './components/time-leaderboard/time-leaderboard.component';
import { TurnsLeaderboardComponent } from './components/turns-leaderboard/turns-leaderboard.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GameComponent } from './components/game/game.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'leaderboard/time', component: TimeLeaderboardComponent },
  { path: 'leaderboard/turns', component: TurnsLeaderboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DisplayScreenComponent,
    TimerComponent,
    TimeLeaderboardComponent,
    TurnsLeaderboardComponent,
    HomeComponent,
    NavbarComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [CardsService, UserStatsService, CurrentPlayerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
