import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss'],
})
export class LikeHateComponent implements OnInit {
  @Output() likeOrHateClick = new EventEmitter<LikeHate>();

  @Input() score!: number;

  constructor() {}

  ngOnInit(): void {}

  LikeClick() {
    this.likeOrHateClick.emit(LikeHate.LIKE);
  }

  HateClick() {
    this.likeOrHateClick.emit(LikeHate.HATE);
  }
}
