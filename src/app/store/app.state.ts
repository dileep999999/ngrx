import { AuthReducer } from "../auth/state/auth.reducer";
import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/posts-list/state/posts.reducer";
import { PostState } from "../posts/posts-list/state/posts.state";

export interface AppState{
    counter: CounterState,
    posts: PostState,
    auth: AuthState
}

export const appReducer = {
    counter: counterReducer,
    posts: postsReducer,
    auth: AuthReducer
}