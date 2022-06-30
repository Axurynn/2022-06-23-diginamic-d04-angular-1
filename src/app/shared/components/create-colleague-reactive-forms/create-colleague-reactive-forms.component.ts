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
import { catchError, map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss'],
})
export class CreateColleagueReactiveFormsComponent implements OnInit {
  colForm: FormGroup;

  // newColleague: NewColleague = {
  //   pseudo: '',
  //   last: '',
  //   first: '',
  //   photo: '',
  // };

  constructor(
    private colleagueService: ColleagueService,
    private router: Router
  ) {
    this.colForm = new FormGroup(
      {
        pseudo: new FormControl('', {
          validators: [Validators.required],
          asyncValidators: [this.checkPseudo.bind(this)],
        }),
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
      { validators: [this.checkFirstLast], updateOn: 'blur' }
    );
  }

  ngOnInit(): void {}

  valider(): void {
    let newColleague: NewColleague = {
      pseudo: this.colForm.get('pseudo')?.value,
      last: this.colForm.get('last')?.value,
      first: this.colForm.get('first')?.value,
      photo: this.colForm.get('photo')?.value,
    };
    this.colleagueService.createNewColleague(newColleague).subscribe((col) => {
      newColleague = col;
    });
    this.colForm.setValue({
      pseudo: '',
      last: '',
      first: '',
      photo: '',
    });
    this.router.navigateByUrl(`/`);
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
      return { firstLast: 'firstname must be different from lastname' };
    } else {
      return null;
    }
  }

  checkPseudo(control: AbstractControl): Observable<ValidationErrors | null> {
    // implémenter la validation
    // La requête HTTP GET API_URL/colleagues/PSEUDO
    // Si le pseudo existe, retourner Observable<ValidationErrors>
    // Si le pseudo n'existe pas, retourner Observable<null>
    if (control.value === null) {
      return of(null);
    }
    return this.checkIfPseudoExists(control.value).pipe(
      map(() => {
        return <ValidationErrors>{ InvalidPseudo: 'Ce pseudo existe déjà' };
      }),
      catchError(() => of(null))
    );
  }

  checkIfPseudoExists(value: string) {
    return this.colleagueService.getColleagueByPseudo(value);
  }

  get checkInvalidPseudo() {
    return (
      this.colForm.controls['pseudo'].dirty &&
      this.colForm.controls['pseudo'].hasError('required')
    );
  }

  get checkExistingPseudo() {
    return this.colForm.controls['pseudo'].hasError('InvalidPseudo');
  }

  get first() {
    return this.colForm.value('first');
  }
  get last() {
    return this.colForm.value('last');
  }
}
