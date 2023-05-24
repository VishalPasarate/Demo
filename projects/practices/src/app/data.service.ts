import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // dataEmitter = new EventEmitter<string>();
  // dataEmitter = new Subject<string>();
  dataEmitter = new BehaviorSubject(0);

  raiseDataEmitterEvent(data: any) {
    this.dataEmitter.next(data);
  };
  constructor() { }
}
