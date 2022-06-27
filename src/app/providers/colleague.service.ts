import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
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
}
