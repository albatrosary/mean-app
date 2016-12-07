import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Observable } from "rxjs/Observable";

import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // instantiate posts to an empty array
  posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

}
