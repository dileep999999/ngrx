import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

export const routes: Routes = [{
    path: '', component:HomeComponent
},
{
    path: 'counter', 
    loadChildren: ()=>import('./counter/counter.routes').then(m=>m.routes)
},
{
    path: 'posts',
    loadChildren: ()=>import('./posts/posts.routes').then(m=>m.routes)
   
}
];
