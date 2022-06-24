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
  @Input() votes!: Vote[];
  @Input() colleague!: Colleague;

  constructor() {}

  ngOnInit(): void {}

  increment(event: string) {
    if (event === 'LIKE') {
      this.colleague.score += 100;
    } else {
      this.colleague.score -= 100;
    }
  }

  pushHistory(): void {
    const voteDup = {
      colleague: { ...this.colleague },
      vote: LikeHate.LIKE,
    };

    this.votes.unshift(voteDup);
  }
}
