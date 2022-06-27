import { Colleague } from './../models/colleague';
import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  // listeVotes: Vote[] = [];

  private voteSubject = new Subject<Vote>();

  constructor() {}

  addVote(collegue: Colleague, vote: string) {
    const voteDup = {
      colleague: { ...collegue },
      vote: vote,
    };

    // this.listeVotes.unshift(voteDup);
    this.voteSubject.next(voteDup);
  }

  // getListeVotes(): Vote[] {
  //   return this.listeVotes;
  // }

  abonner(): Observable<Vote> {
    return this.voteSubject.asObservable();
  }
}
