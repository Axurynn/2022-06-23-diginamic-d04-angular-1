import { VoteService } from './../../../providers/vote.service';
import { Colleague } from 'src/app/models/colleague';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { LikeHate } from 'src/app/models/like-hate';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent implements OnInit, OnDestroy {
  votes: Vote[] = [];
  @Input() colleague!: Colleague;
  abonnement!: Subscription;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.abonnement = this.voteService.abonner().subscribe((clicAddVote) => {
      this.votes.unshift(clicAddVote);
    });
  }

  ngOnDestroy(): void {
    if (this.abonnement) {
      this.abonnement.unsubscribe();
    }
  }

  increment(event: LikeHate) {
    this.voteService.addVote(this.colleague, event).subscribe((fullCol) => {
      this.colleague.score = fullCol.score;
    });
  }
}
