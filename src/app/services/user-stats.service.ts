import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Leaderboard } from '../leaderboardInterface';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class UserStatsService {
  private _url;
  private _username;
  private _userTime;
  private _userClicks;

  constructor(private http: HttpClient) {}

  //Check if the User's name is entered
  validateUser(user): boolean {
    if (user.name == undefined || user.name == ' ') {
      return false;
    } else {
      return true;
    }
  }

  //Adding the user stats to db
  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this._url = 'http://localhost:3000/leaderboard/update_score';

    return this.http.post<any>(this._url, user, { headers: headers });
  }

  //Return all users' times
  getUserTimes() {
    this._url = 'http://localhost:3000/leaderboard/time';
    let promise = this.http
      .get(this._url)
      .pipe(tap(_ => console.log('fetched the leaderboard')));
    console.log(promise);

    return promise;
  }

  //Return all users' turns
  getUserTurns() {
    this._url = 'http://localhost:3000/leaderboard/turns';
    let promise = this.http.get(this._url);
    console.log('getTurns');

    console.log(promise);

    return promise;
  }
}
