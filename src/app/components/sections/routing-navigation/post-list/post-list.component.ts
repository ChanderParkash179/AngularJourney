import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  posts: Array<any> = [{
    id: 1,
    title: 'Title 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }, {
    id: 2,
    title: 'Title 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }, {
    id: 3,
    title: 'Title 3',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }, {
    id: 4,
    title: 'Title 4',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }, {
    id: 5,
    title: 'Title 5',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }, {
    id: 6,
    title: 'Title 6',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },];
}
