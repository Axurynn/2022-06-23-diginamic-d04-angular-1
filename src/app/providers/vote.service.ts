import { Colleague } from './../models/colleague';
import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  listeVotes: Vote[] = [];

  constructor() {}

  addVote(collegue: Colleague, vote: LikeHate) {
    const voteDup = {
      colleague: { ...collegue },
      vote: vote,
    };

    this.listeVotes.unshift(voteDup);
  }

  getListeVotes(): Vote[] {
    return this.listeVotes;
  }
}
