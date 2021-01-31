import { combineReducers } from 'redux';
import getProductsReducer from './getProductsReducer';
import getProductReducer from './getProductReducer';
import createProductReducer from './createProductReducer';

const productsReducer = combineReducers({
    getProductsReducer,
    getProductReducer,
    createProductReducer

});
export default productsReducer;
