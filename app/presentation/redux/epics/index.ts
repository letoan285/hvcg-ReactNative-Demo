import { combineEpics } from "redux-observable";
import { productsEpic } from './products';

export const rootEpic = combineEpics(productsEpic);