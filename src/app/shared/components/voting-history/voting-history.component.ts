import { Component, OnInit, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss'],
})
export class VotingHistoryComponent implements OnInit {
  @Input() votes!: Vote[];

  constructor() {}

  ngOnInit(): void {}

  supprimer(event: any) {
    event.target.offsetParent.remove();
  }
}
