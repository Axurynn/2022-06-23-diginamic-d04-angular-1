import { HttpClient } from '@angular/common/http';
import { Colleague } from './../models/colleague';
import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';
import { Observable, Subject, tap } from 'rxjs';

const VOTES_URL = 'https://colleagues-app.herokuapp.com/api/v2/votes';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  voteSubject = new Subject<Vote>();

  constructor(private http: HttpClient) {}

  addVote(colleague: Colleague, vote: LikeHate) {
    return this.http
      .post<Colleague>(VOTES_URL, {
        pseudo: colleague.pseudo,
        like_hate: vote,
      })
      .pipe(
        tap((colleague) =>
          this.voteSubject.next({ colleague, vote, score: colleague.score })
        )
      );
  }

  abonner(): Observable<Vote> {
    return this.voteSubject.asObservable();
  }

  getVoteList() {
    return this.http.get<Vote[]>(VOTES_URL);
  }
}
