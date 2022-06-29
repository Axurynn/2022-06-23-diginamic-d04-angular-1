import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { from, map, Observable, of } from 'rxjs';
import { FullColleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: PseudoValidatorDirective,
      multi: true,
    },
  ],
})
export class PseudoValidatorDirective {
  verifCol: FullColleague = {
    pseudo: '',
    last: '',
    first: '',
    photo: '',
    score: 0,
  };
  constructor(private colleagueSrv: ColleagueService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    // implémenter la validation
    // La requête HTTP GET API_URL/colleagues/PSEUDO
    // Si le pseudo existe, retourner Observable<ValidationErrors>
    // Si le pseudo n'existe pas, retourner Observable<null>
    return this.checkIfPseudoExists(control.get('pseudo')?.value).pipe(
      map((res) => {
        return res ? { pseudoExists: true } : null;
      })
    );
  }

  checkIfPseudoExists(value: string) {
    return this.colleagueSrv.getColleagueByPseudo(value);
  }
}
