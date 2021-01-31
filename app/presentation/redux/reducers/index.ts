import { combineReducers } from "redux"
import productsReducer from './products'


export const appReducer = combineReducers({productsReducer});


export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}