import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  datiUtente = new BehaviorSubject<any>(null);

  constructor() { }
}
