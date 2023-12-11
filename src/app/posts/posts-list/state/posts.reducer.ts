import { Action, createReducer } from "@ngrx/store";
import { PostState, initialState } from "./posts.state";

const _postsReducer = createReducer(initialState)
export function postsReducer(state = initialState,action:Action){
    return _postsReducer(state,action);
}