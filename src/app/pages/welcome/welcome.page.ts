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
  // collegues: Colleague[] = [
  //   {
  //     id: 1,
  //     pseudo: 'Jessica',
  //     score: 0,
  //     photo:
  //       'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  //   },
  //   {
  //     id: 2,
  //     pseudo: 'Alexis',
  //     score: 0,
  //     photo:
  //       'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  //   },
  //   {
  //     id: 3,
  //     pseudo: 'Martin',
  //     score: 0,
  //     photo:
  //       'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  //   },
  //   {
  //     id: 4,
  //     pseudo: 'Sylvie',
  //     score: 0,
  //     photo:
  //       'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  //   },
  //   {
  //     id: 5,
  //     pseudo: 'Antoine',
  //     score: 0,
  //     photo:
  //       'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  //   },
  //   {
  //     id: 6,
  //     pseudo: 'Mathilde',
  //     score: 0,
  //     photo:
  //       'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  //   },
  //   {
  //     id: 7,
  //     pseudo: 'Gérard',
  //     score: 0,
  //     photo:
  //       'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  //   },
  //   {
  //     id: 8,
  //     pseudo: 'Emma',
  //     score: 0,
  //     photo:
  //       'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  //   },
  //   {
  //     id: 9,
  //     pseudo: 'Hugo',
  //     score: 0,
  //     photo:
  //       'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  //   },
  // ];

  // votes: Vote[] = [];

  constructor(private tcEventService: TCEventService) {}

  ngOnInit(): void {}

  refresh() {
    this.tcEventService.publish(TCEvent.REFRESH);
  }
}
