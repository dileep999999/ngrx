import { Action, State, createReducer } from "@ngrx/store";
import { initialState } from "./auth.state";

const _authReducer = createReducer(initialState);
export function AuthReducer(state=initialState,action:Action){
    return _authReducer(state,action);
}