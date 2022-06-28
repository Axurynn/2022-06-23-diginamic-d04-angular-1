import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TCEvent } from '../models/tcevent';

@Injectable({
  providedIn: 'root',
})
export class TCEventService {
  private subjectTCEvent = new Subject<TCEvent>();

  constructor() {}

  publish(evt: TCEvent) {
    this.subjectTCEvent.next(evt);
  }

  getTCEventObs() {
    return this.subjectTCEvent.asObservable();
  }
}
