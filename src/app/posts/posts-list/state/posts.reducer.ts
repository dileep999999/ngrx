import { Action, createReducer, on } from "@ngrx/store";
import {  initialState } from "./posts.state";
import { addPost, deletePost, updatePost } from "./posts.action";

const _postsReducer = createReducer(initialState, on(addPost,(state,action)=>{
    let post = {...action.post}
    post.id = (state.posts.length+1).toString()
    return{
        ...state,
        posts: [...state.posts, post]
    }
}),
on(updatePost,(state,action)=>{
    const updatedPost = state.posts.map(post=>{
        return action.post.id === post.id ? action.post : post
    })
    return {
        ...state,
        posts: updatedPost
    }
}),
on(deletePost,(state,action)=>{
    return {
        ...state,
        posts: state.posts.filter(x=>x.id != action.id)
    }
})
)
export function postsReducer(state = initialState,action:Action){
    return _postsReducer(state,action);
}