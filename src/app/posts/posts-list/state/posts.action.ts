import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

export const addPost = createAction('AddPost',props<{post:Post}>())
export const updatePost = createAction('Update Post',props<{post:Post}>())
export const deletePost = createAction('Delete Post',props<{id:string}>())