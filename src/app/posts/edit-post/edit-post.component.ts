import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { getPostById } from '../posts-list/state/posts.selector';
import { Post } from '../posts-list/state/posts.state';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updatePost } from '../posts-list/state/posts.action';


@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss'
})
export class EditPostComponent implements OnInit, OnDestroy{
  post!: Post;
  postForm!: FormGroup;
  postSubscription!: Subscription;
  constructor(private route:ActivatedRoute,private store: Store<AppState>,private router: Router){}
  ngOnDestroy(): void {
    if(this.postSubscription)
    this.postSubscription.unsubscribe();
  }
  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params:any)=>{
      const id = params.get('id');
      this.postSubscription = this.store.select(getPostById,{id}).subscribe((data:any)=>{
        this.post = data;
        this.createForm();
      })
    })
  }
  createForm(){
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title,[Validators.required,Validators.minLength(6)]),
      description: new FormControl(this.post.description,[Validators.required,Validators.minLength(10)])
    })
  }
  onSubmit(){
    if(!this.postForm.valid){
      return;
    }
    const title = this.postForm.value.title;
    const description = this.postForm.value.description;
    const post : Post = {
      id: this.post.id,
      title,
      description
    }
    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts']);
  }

}
