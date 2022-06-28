import { Component, OnInit, Input, OnDestroy, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss'],
})
export class VotingHistoryComponent implements OnInit, OnDestroy {
  listeVotes: Vote[] = [];

  abonnement!: Subscription;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    // this.listeVotes = this.voteService.getListeVotes();
    this.getVoteHistory();
    this.voteService.abonner().subscribe(() => this.getVoteHistory());
  }

  getVoteHistory(): void {
    this.abonnement = this.voteService
      .getVoteList()
      .subscribe((clicAddVote) => {
        this.listeVotes = clicAddVote;
      });
  }

  supprimer(i: number) {
    this.listeVotes.splice(i, 1);
  }

  ngOnDestroy(): void {
    if (this.abonnement) {
      this.abonnement.unsubscribe();
    }
  }
}
