import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model/user';
import { UserListService } from 'src/app/services/http/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  constructor(private _userListService: UserListService) { }

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  users?: any;
  fetchAllUsers() {
    this._userListService.fetchUsers().subscribe(
      (response) => this.users = response,
      (error: any) => error,
      () => console.log('fetching Users!')
    );
  }
}
