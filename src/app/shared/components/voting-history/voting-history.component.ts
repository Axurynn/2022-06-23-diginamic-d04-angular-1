import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { TCEvent } from 'src/app/models/tcevent';
import { Vote } from 'src/app/models/vote';
import { TCEventService } from 'src/app/providers/tcevent.service';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss'],
})
export class VotingHistoryComponent implements OnInit, OnDestroy {
  listeVotes: Vote[] = [];

  abonnement!: Subscription;
  tcEventSub!: Subscription;

  constructor(
    private voteService: VoteService,
    private tcEventService: TCEventService
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.abonnement = this.voteService.abonner().subscribe(() => {
      this.refresh();
    });
    this.tcEventSub = this.tcEventService
      .getTCEventObs()
      .pipe(filter((tcEvt) => tcEvt === TCEvent.REFRESH))
      .subscribe(() => this.refresh());
  }

  refresh() {
    this.voteService
      .getVoteList()
      .subscribe((votesServeur) => (this.listeVotes = votesServeur));
  }

  supprimer(i: number) {
    this.listeVotes.splice(i, 1);
  }

  ngOnDestroy(): void {
    if (this.abonnement) {
      this.abonnement.unsubscribe();
    }
    this.tcEventSub.unsubscribe();
  }
}
