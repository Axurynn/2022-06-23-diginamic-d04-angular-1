import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Observable, Subscription } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { TCEvent } from 'src/app/models/tcevent';
import { TCEventService } from 'src/app/providers/tcevent.service';
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
  tcEventSub!: Subscription;

  constructor(
    private voteService: VoteService,
    private tcEventService: TCEventService
  ) {}

  ngOnInit(): void {
    this.abonnement = this.voteService.abonner().subscribe((clicAddVote) => {
      if (clicAddVote.vote === LikeHate.LIKE) {
        this.totalVotesUp += 1;
      } else {
        this.totalVotesDown += 1;
      }
    });
    this.tcEventSub = this.tcEventService
      .getTCEventObs()
      .pipe(filter((tcEvt) => tcEvt === TCEvent.REFRESH))
      .subscribe(() => this.refresh());
  }

  ngOnDestroy(): void {
    if (this.abonnement) {
      this.abonnement.unsubscribe();
    }
  }

  refresh() {
    this.totalVotesDown = 0;
    this.totalVotesUp = 0;
  }
}
