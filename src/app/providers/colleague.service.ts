import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Colleague, FullColleague, NewColleague } from '../models/colleague';
import { HttpClient } from '@angular/common/http';

const COLLEAGUES_URL = 'https://colleagues-app.herokuapp.com/api/v2/colleagues';

@Injectable({
  providedIn: 'root',
})
export class ColleagueService {
  constructor(private http: HttpClient) {}

  getColleaguesList(): Observable<Colleague[]> {
    // GET https://colleagues-app.herokuapp.com/api/v2/colleagues
    return this.http.get<Colleague[]>(COLLEAGUES_URL);
  }

  getColleagueByPseudo(pseudo: string): Observable<FullColleague> {
    return this.http.get<FullColleague>(`${COLLEAGUES_URL}/${pseudo}`);
  }

  /* POST /colleagues
    {
      "pseudo": "test",
      "last": "RENOTONSS",
      "first": "EtienneSSS",
      "photo": "https://randomuser.me/api/portraits/men/79.jpg",
      "score": 100
    }
  */
  createNewColleague(newColleague: NewColleague): Observable<FullColleague> {
    return this.http.post<FullColleague>(COLLEAGUES_URL, {
      pseudo: newColleague.pseudo,
      first: newColleague.first,
      last: newColleague.last,
      photo: newColleague.photo,
    });
  }
}
