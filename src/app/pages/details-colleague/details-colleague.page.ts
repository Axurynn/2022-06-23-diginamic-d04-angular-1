import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullColleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-details-colleague',
  templateUrl: './details-colleague.page.html',
  styleUrls: ['./details-colleague.page.scss'],
})
export class DetailsColleaguePage implements OnInit {
  pseudo: any;
  colleague: FullColleague = {
    first: '',
    last: '',
    pseudo: '',
    score: 0,
    photo: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private colleagueSrv: ColleagueService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (paramMap) => (this.pseudo = paramMap.get('pseudo'))
    );
    this.colleagueSrv
      .getColleagueByPseudo(this.pseudo)
      .subscribe((col) => (this.colleague = col));
  }
}
