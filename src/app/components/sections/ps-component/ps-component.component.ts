import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-ps-component',
  templateUrl: './ps-component.component.html',
  styleUrls: ['./ps-component.component.css'],
})
export class PostServiceComponent implements OnInit {
  posts: Array<any>;

  // way 1
  /* constructor() {
    let postService = new PostService();
    this.posts = postService.postList;
  } */

  // way 2
  constructor(private postService: PostService) {
    this.posts = postService.postList;
  }

  addNew() {
    let newData: Post = ({ id: 7, post: 'Post 7' });
    this.postService.addNewData(newData);
  }

  deleteOld(index: any) {
    this.postService.deleteOldData(index);
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
