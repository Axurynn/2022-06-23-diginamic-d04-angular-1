import { VoteService } from './../../../providers/vote.service';
import { Colleague } from 'src/app/models/colleague';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent implements OnInit {
  votes: Vote[] = [];

  @Input() colleague!: Colleague;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.votes = this.voteService.getListeVotes();
  }

  increment(event: string) {
    if (event === 'LIKE') {
      this.colleague.score += 100;
    } else {
      this.colleague.score -= 100;
    }
    this.voteService.addVote(this.colleague, event);
  }
}
