import { combineEpics } from "redux-observable";
import { productsEpic } from './products';
import { initAppEpic } from './general/appInitiation';

export const rootEpic = combineEpics(initAppEpic, productsEpic);