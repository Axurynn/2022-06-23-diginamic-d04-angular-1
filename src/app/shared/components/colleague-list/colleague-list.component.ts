import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss'],
})
export class ColleagueListComponent implements OnInit {
  collegues: Colleague[] = [
    {
      pseudo: 'Jessica',
      score: 0,
      photo:
        'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      pseudo: 'Jessica',
      score: 0,
      photo:
        'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      pseudo: 'Jessica',
      score: 0,
      photo:
        'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      pseudo: 'Jessica',
      score: 0,
      photo:
        'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      pseudo: 'Jessica',
      score: 0,
      photo:
        'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      pseudo: 'Jessica',
      score: 0,
      photo:
        'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      pseudo: 'Jessica',
      score: 0,
      photo:
        'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      pseudo: 'Jessica',
      score: 0,
      photo:
        'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      pseudo: 'Jessica',
      score: 0,
      photo:
        'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
