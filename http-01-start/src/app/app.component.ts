import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  errorSub: Subscription;

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit() {
    this.onFetchPosts();
    this.postsService.error.subscribe( error => this.error = error);
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content );
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe( posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe( () => {
      this.loadedPosts = [];
    })
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub?.unsubscribe();
  }
}