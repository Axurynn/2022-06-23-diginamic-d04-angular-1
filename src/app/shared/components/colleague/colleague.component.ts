import { VoteService } from './../../../providers/vote.service';
import { Colleague } from 'src/app/models/colleague';
import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
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

  increment(event: string) {
    if (event === 'LIKE') {
      this.colleague.score += 100;
    } else {
      this.colleague.score -= 100;
    }
    this.voteService.addVote(this.colleague, event);
  }

  ngOnDestroy(): void {
    if (this.abonnement) {
      this.abonnement.unsubscribe();
    }
  }
}
