import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
// import 'rxjs/Rx';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class UserStatsService {
  private _url = 'http://localhost:3000/leaderboard/update_score';

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
    return this.http.post<any>(this._url, user, { headers: headers });
  }
}
