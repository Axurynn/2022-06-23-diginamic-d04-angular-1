import { Router } from '@angular/router';
import { TCEventService } from './../../providers/tcevent.service';
import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';
import { TCEvent } from 'src/app/models/tcevent';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  constructor(private tcEventService: TCEventService) {}

  ngOnInit(): void {}

  refresh() {
    this.tcEventService.publish(TCEvent.REFRESH);
  }
}
