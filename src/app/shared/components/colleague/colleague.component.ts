import { LikeHate } from './../../../models/like-hate';
import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent implements OnInit {
  @Input() colleague!: Colleague;
  unScore!: number;

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.unScore = this.colleague.score;
  }

  increment(event: string) {
    if (event === 'LIKE') {
      this.colleague.score += 100;
    } else {
      this.colleague.score -= 100;
    }
  }
}
