import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './state/posts.state';
import { getPosts } from './state/posts.selector';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit{
  posts!: Observable<Post[]>;
constructor(private store: Store<AppState>){}
  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }
}
