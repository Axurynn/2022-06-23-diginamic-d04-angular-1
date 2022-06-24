import { Colleague } from 'src/app/models/colleague';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent implements OnInit {
  @Input() historique!: Colleague[];
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

  pushHistory(num: number): void {
    const test = {
      id: this.colleague.id,
      pseudo: this.colleague.pseudo,
      score: num,
      photo: this.colleague.photo,
    };

    this.historique.unshift(test);
  }
}
