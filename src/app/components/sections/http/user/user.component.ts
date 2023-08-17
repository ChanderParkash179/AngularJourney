import { User } from './../../../../models/user';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  title: string = 'Angular HTTP';

  constructor(private _userService: UserService) { }


  onGetUsers(): void {
    this._userService.getUsers().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done!')
    );
  }

  user: any;
  id: any;
  hasData: boolean = false;
  onGetUser(id: number): void {
    this._userService.getUser(id).subscribe(
      (response: User) => this.user = response != null ? (this.hasData = true) && response : (this.hasData = false) && response == null,
      (error: any) => console.log(error),
      () => console.log('done!')
    );
  }

  ngOnInit(): void { }

}
