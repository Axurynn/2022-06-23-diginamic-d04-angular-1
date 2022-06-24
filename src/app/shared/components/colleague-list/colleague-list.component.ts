import { Component, Input, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss'],
})
export class ColleagueListComponent implements OnInit {
  @Input() collegues!: Colleague[];
  @Input() votes!: Vote[];

  constructor() {}

  ngOnInit(): void {}
}
