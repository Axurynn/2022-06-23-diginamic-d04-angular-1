import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit, OnDestroy {
  totalVotesUp: number = 0;
  totalVotesDown: number = 0;

  abonnement!: Subscription;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.abonnement = this.voteService.abonner().subscribe((clicAddVote) => {
      if (clicAddVote.vote === LikeHate.LIKE) {
        this.totalVotesUp += 1;
      } else {
        this.totalVotesDown += 1;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.abonnement) {
      this.abonnement.unsubscribe();
    }
  }
}
