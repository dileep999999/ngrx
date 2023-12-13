import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

export const addPost = createAction('AddPost',props<{post:Post}>())