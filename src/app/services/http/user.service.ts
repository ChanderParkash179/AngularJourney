import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  baseUrl: string = 'https://jsonplaceholder.typicode.com/';

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.baseUrl + 'users');
  }

  getUser(id: number): Observable<User> {
    return this._http.get<User>(this.baseUrl + 'users/' + id);
  }

}
