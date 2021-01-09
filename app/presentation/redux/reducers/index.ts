import { combineReducers } from "redux"

function generalReducer(state: any, action: any){
    return state;
}

export const appReducer = combineReducers(generalReducer);


export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}