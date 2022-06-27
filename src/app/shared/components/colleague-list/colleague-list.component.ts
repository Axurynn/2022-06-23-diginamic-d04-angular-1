import { Observable, Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss'],
})
export class ColleagueListComponent implements OnInit {
  colleguesList$!: Observable<Colleague[]>;
  @Input() votes!: Vote[];

  constructor(private colleagueService: ColleagueService) {}

  ngOnInit(): void {
    this.colleguesList$ = this.colleagueService.getColleaguesList();
  }
}
