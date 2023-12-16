import { Routes } from "@angular/router";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";

export const routes: Routes = [
    {
        path: '',
        component: PostsListComponent,
        children: [
        {path: 'add', component: AddPostComponent},
        {path:'edit/:id', component: EditPostComponent}
    ]
    }
]