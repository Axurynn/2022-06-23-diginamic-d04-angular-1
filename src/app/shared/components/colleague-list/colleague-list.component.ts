import { filter, Observable, Subscription } from 'rxjs';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { TCEventService } from 'src/app/providers/tcevent.service';
import { TCEvent } from 'src/app/models/tcevent';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss'],
})
export class ColleagueListComponent implements OnInit, OnDestroy {
  colleguesList: Colleague[] = [];
  tcEventSub!: Subscription;

  constructor(
    private colleagueService: ColleagueService,
    private tcEventService: TCEventService
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.tcEventSub = this.tcEventService
      .getTCEventObs()
      .pipe(filter((tcEvt) => tcEvt === TCEvent.REFRESH))
      .subscribe(() => this.refresh());
  }

  ngOnDestroy(): void {
    this.tcEventSub.unsubscribe();
  }

  refresh() {
    this.colleagueService
      .getColleaguesList()
      .subscribe(
        (listeColleguesServeur) => (this.colleguesList = listeColleguesServeur)
      );
  }
}
