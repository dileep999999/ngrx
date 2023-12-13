import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from '../posts-list/state/posts.state';
import { AppState } from '../../store/app.state';
import { addPost } from '../posts-list/state/posts.action';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss'
})
export class AddPostComponent implements OnInit{
  postForm!: FormGroup;
  constructor(private store: Store<AppState>){}
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null,[Validators.required,Validators.minLength(6)]),
      description: new FormControl(null,[Validators.required,Validators.minLength(10)])
    })
    

  }
  onAddPost(){
    const post:Post={
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(addPost({post}));
    this.postForm.reset();
  }

}
