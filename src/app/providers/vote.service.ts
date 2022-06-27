import { HttpClient } from '@angular/common/http';
import { Colleague } from './../models/colleague';
import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';
import { Observable, Subject } from 'rxjs';

const VOTES_URL = 'https://colleagues-app.herokuapp.com/api/v2/votes';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  constructor(private http: HttpClient) {}

  addVote(collegue: Colleague, vote: string) {
    this.http
      .post(VOTES_URL, {
        pseudo: collegue.pseudo,
        vote: vote,
      })
      .subscribe((data) => {});
  }

  abonner(): Observable<Vote[]> {
    // return this.voteSubject.asObservable();
    return this.http.get<Vote[]>(VOTES_URL);
  }
}
