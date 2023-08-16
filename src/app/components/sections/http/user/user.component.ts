import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private _userService: UserService) {

    type HttpResponse = { code: number, data: string };

    const obs = new Observable<HttpResponse>(subscribe => {
      console.log("Inside Observable!");

      subscribe.next({ code: 200, data: 'This is Data 1' });
      subscribe.next({ code: 200, data: 'This is Data 2' });
      subscribe.next({ code: 200, data: 'This is Data 3' });
      subscribe.error({ code: 500, data: 'This is Data 4' });

      console.log("Outside Observable!");
    }).subscribe({
      next(response: HttpResponse) {
        console.log('got response: ', response);
      },
      error(error: any) {
        console.log('something wrong occured!', error);
      },
      complete() {
        console.log('done');
      },
    });
  }


  ngOnInit(): void { }

}
