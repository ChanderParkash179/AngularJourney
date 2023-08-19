import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { User } from 'src/app/models/user-model/user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  baseURL: string = environment.baseApiUrl;
  readonly defaultImg = 'https://robohash.org/'
  constructor(private _http: HttpClient) { }

  // get all users
  fetchUsers(): Observable<User[]> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')

    return this._http.get<User[]>(this.baseURL + 'users', { headers: headers }).pipe(
      map(users => users.map(user => ({
        ...user,
        name: user.name.toUpperCase(),
        image: (this.defaultImg + '/' + user.username.toLowerCase()),
        isAdmin: user.id == 2 ? 'Admin' : 'User'
      })))
    );
  }
}
