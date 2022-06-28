import { VoteService } from './../../../providers/vote.service';
import { Colleague } from 'src/app/models/colleague';
import { Component, Input, OnInit } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { LikeHate } from 'src/app/models/like-hate';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent implements OnInit {
  @Input() colleague!: any;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {}

  increment(event: LikeHate) {
    this.voteService.addVote(this.colleague, event).subscribe((data) => {
      this.colleague = data;
    });
  }
}
