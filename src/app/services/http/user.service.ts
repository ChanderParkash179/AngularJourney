import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';

import { User } from 'src/app/models/user-model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  baseUrl: string = environment.baseApiUrl;

  // get all users
  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.baseUrl + 'users');
  }

  // get user by id
  getUser(id: number): Observable<User> {
    return this._http.get<User>(this.baseUrl + 'users/' + id);
  }

  // create new user
  createUser(user: User): Observable<User> {
    return this._http.post<User>(this.baseUrl + 'users', user);
  }

  // update old user
  updateUser(user: User): Observable<User> {
    return this._http.put<User>(this.baseUrl + `users/${user.id}`, user);
  }

  // patch old user
  patchUser(user: User): Observable<User> {
    return this._http.patch<User>(this.baseUrl + `users/${user.id}`, user);
  }

  // delete user
  deleteUser(id: number): Observable<User> {
    return this._http.delete<User>(this.baseUrl + 'users/' + id);
  }
}
