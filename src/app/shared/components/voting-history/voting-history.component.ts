import { Component, OnInit, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss'],
})
export class VotingHistoryComponent implements OnInit {
  @Input() collegues!: Colleague[];
  @Input() historique!: Colleague[];

  constructor() {}

  ngOnInit(): void {}

  supprimer(event: any) {
    event.target.offsetParent.remove();
  }
}
