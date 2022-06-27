import { Component, OnInit, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss'],
})
export class VotingHistoryComponent implements OnInit {
  listeVotes: Vote[] = [];

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.listeVotes = this.voteService.getListeVotes();
  }

  supprimer(i: number) {
    this.listeVotes.splice(i, 1);
  }
}
