import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewColleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss'],
})
export class CreateColleagueReactiveFormsComponent implements OnInit {
  colForm: FormGroup;
  newColleague: NewColleague = {
    pseudo: '',
    last: '',
    first: '',
    photo: '',
  };

  constructor(
    private fb: FormBuilder,
    private colleagueService: ColleagueService
  ) {
    this.colForm = fb.group({
      pseudo: ['', [Validators.required]],
      last: ['', [Validators.required, Validators.minLength(2)]],
      first: ['', [Validators.required, Validators.minLength(2)]],
      photo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  valider(): void {
    this.newColleague = this.colForm.value;
    this.colleagueService
      .createNewColleague(this.newColleague)
      .subscribe((col) => {
        this.newColleague = col;
      });
    this.colForm.setValue({
      pseudo: '',
      last: '',
      first: '',
      photo: '',
    });
  }

  checkFields(name: string) {
    return (
      this.colForm.controls[name].invalid && this.colForm.controls[name].dirty
    );
  }
}
