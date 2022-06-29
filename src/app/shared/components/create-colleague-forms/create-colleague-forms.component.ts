import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { NewColleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss'],
})
export class CreateColleagueFormsComponent implements OnInit {
  newColleague: NewColleague = {
    pseudo: '',
    last: '',
    first: '',
    photo: '',
  };

  constructor(private colleagueService: ColleagueService) {}

  ngOnInit(): void {}

  valider(): void {
    this.colleagueService
      .createNewColleague(this.newColleague)
      .subscribe((col) => {
        this.newColleague = col;
      });
    this.newColleague = {
      pseudo: '',
      last: '',
      first: '',
      photo: '',
    };
  }

  checkFirstLast(statutForm: NgForm): boolean {
    if (statutForm.errors === null) {
      return false;
    } else if ('firstLast' in statutForm.errors) {
      return true;
    } else {
      return false;
    }
  }

  checkPseudo(statutForm: NgForm): any {
    if (statutForm.errors === null) {
      return false;
    } else if ('pseudoExists' in statutForm.errors) {
      return true;
    } else {
      return false;
    }
  }
}
