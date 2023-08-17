import { User } from '../../../../models/user-model/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  title: string = 'Angular HTTP';

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.onGetUsers();

    // this.onGetUser();

    // this.onCreateUser();

    // this.onUpdateUser();

    // this.onPatchUser();

    // this.onDeleteUser();
  }

  // *******************************************************

  // GET USERS
  onGetUsers(): void {
    this._userService.getUsers().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('done getting all users!')
    );
  }

  // *******************************************************

  // GET USER BY ID
  id = 3;

  onGetUser(): void {
    this._userService.getUser(this.id).subscribe( // this will return the user who's id is 3
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('done getting a user!')
    );
  }

  // *******************************************************

  // CREATE USER
  private createUser: User = {
    'name': 'Leanne Graham',
    'username': 'Bret',
    'email': 'Sincere@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Romaguera-Crona',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  };

  onCreateUser() {
    this._userService.createUser(this.createUser).subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('done creating a user!')
    );
  }

  // *******************************************************

  // UPDATE USER
  private updateUser: User = {
    'id': 1,
    'name': 'Simon Greg',
    'username': 'Bret',
    'email': 'Sincere@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Romaguera-Crona',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  };

  onUpdateUser() {
    this._userService.updateUser(this.updateUser).subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('done creating a user!')
    );
  }

  // *******************************************************

  // PATCH USER
  private patchUser: User = {
    'id': 1,
    'name': 'Rihan',
    'username': 'Simon',
    'email': 'Rihan@april.biz'
  };

  onPatchUser() {
    this._userService.patchUser(this.patchUser).subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('done creating a user!')
    );
  }
  // *******************************************************

  // DELETE USER
  deleteUserId: number = 1;
  onDeleteUser() {
    this._userService.deleteUser(this.deleteUserId).subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('done creating a user!')
    );
  }


  // *******************************************************

}
