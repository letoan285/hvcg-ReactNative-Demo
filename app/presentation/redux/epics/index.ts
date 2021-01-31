import { combineEpics } from "redux-observable";
import { productsEpic } from './products';
import {initAppEpic,getAllEpic} from './general/appInitiation';

export const rootEpic = combineEpics(initAppEpic, productsEpic);