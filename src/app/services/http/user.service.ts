import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/app/environment/environment';

import { User } from 'src/app/models/user-model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  baseUrl: string = environment.baseApiUrl;

  readonly additionalParams = ['test1', 'test2'];

  excErrorGetUsersCReplace(): Observable<User[]> | any {
    return this._http.get<User[]>(this.baseUrl + 'users')
      .pipe(
        catchError((error: any) => {
          console.log(error);
          return of([{ id: 0, name: 'Chander Parkash' }])
        }));
  }

  excErrorGetUsersCRethrow(): Observable<User[]> | any {
    return this._http.get<User[]>(this.baseUrl + 'users')
      .pipe(
        catchError((error: any) => {
          console.log(error);
          return of([{ id: 0, name: 'Chander Parkash' }])
        }));
  }

  // get all users
  getUsers(): Observable<User[]> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('dummy', 'chander');

    return this._http.get<User[]>(this.baseUrl + 'users', { headers: headers });
  }

  // get user by id
  getUser(id: number): Observable<User> {
    let params = new HttpParams()
      .set('page', '2')
      .set('sort', 'asc');

    return this._http.get<User>(this.baseUrl + 'users/' + id, { params: params });
  }

  // create new user
  createUser(user: User): Observable<User> {
    const objectParams = { ['testList']: this.additionalParams }
    const params = new HttpParams({ fromObject: objectParams });

    return this._http.post<User>(this.baseUrl + 'users', user, { params: params });
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

  // text return type
  uploadText(): Observable<string> {
    return this._http.get('assets/text.txt', { responseType: 'text' });
  }

  // large file
  downloadFile(): Observable<HttpResponse<Blob>> {
    return this._http.get('assets/text.txt', { responseType: 'blob', observe: 'response' });
  }
}
