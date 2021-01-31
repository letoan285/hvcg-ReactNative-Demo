import { combineReducers } from "redux";
import productsReducer from './products';
import { homeInitReducer } from './general'


export const appReducer = combineReducers({homeInitReducer, productsReducer});


export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}