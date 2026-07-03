import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl="/api/users"

  datiUtente = new BehaviorSubject<any>(null);

  constructor(private http:HttpClient) { }

  insertUser(user: any): Observable<any>{
    return this.http.post<any>(`${this.apiBaseUrl}`,user);
  }
}
