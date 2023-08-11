import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  postList: Array<any> = [
    { id: 1, post: 'Post 1' },
    { id: 2, post: 'Post 2' },
    { id: 3, post: 'Post 3' },
    { id: 4, post: 'Post 4' },
    { id: 5, post: 'Post 5' },
  ];

  addNewData(data: any) {
    this.postList.push(data);
  }

  deleteOldData(index: any) {
    this.postList.splice(index, 1);
  }
}
