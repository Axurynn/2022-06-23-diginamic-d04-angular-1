import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
    // this.abonnement = this.voteService.getVoteList().subscribe((listeVotes) => {
    //   listeVotes.forEach((vote) => {
    //     // console.log(vote);
    //     if (vote.vote === 'LIKE') {
    //       this.totalVotesUp += 1;
    //     } else {
    //       this.totalVotesDown += 1;
    //     }
    //   });
    // });
    this.voteService.abonner().subscribe((vote) => {
      if (vote.vote === 'LIKE') {
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
