import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor() {}

  getTopTenTurns(users) {
    const topTen = [];

    this.sortList(users);

    for (let i = 0; i < 10; i++) {
      topTen.push(users[i]);
    }

    return topTen;
  }

  sortList(list) {
    let i = 0;

    while (i < list.length - 1) {
      i++;

      if (list[i] > list[i + 1]) {
        let temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = list[i];

        i = 0;
      }
    }
  }
}
