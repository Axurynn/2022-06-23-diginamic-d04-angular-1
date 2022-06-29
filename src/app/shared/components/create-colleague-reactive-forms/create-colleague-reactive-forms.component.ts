import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewColleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { FirstLastValidatorDirective } from '../../validators/first-last-validator.directive';

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

  constructor(private colleagueService: ColleagueService) {
    this.colForm = new FormGroup(
      {
        pseudo: new FormControl('', [Validators.required]),
        last: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        first: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        photo: new FormControl('', [Validators.required]),
      },
      [this.checkFirstLast]
    );
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

  checkFirstLast(control: AbstractControl): ValidationErrors | null {
    if (
      control.get('first')?.value === control.get('last')?.value &&
      control.get('first')?.dirty &&
      control.get('last')?.dirty
    ) {
      return { firstLast: 'first name must be different from lastname' };
    } else {
      return null;
    }
  }

  get first() {
    return this.colForm.value('first');
  }
  get last() {
    return this.colForm.value('last');
  }
}
