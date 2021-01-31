import { combineEpics } from 'redux-observable';

import { getProductsEpic } from './getProductsEpic';
import { getProductEpic} from './getProductEpic';
import { createProductEpic } from './createProductEpic';
import { deleteProductEpic } from './deleteProductEpic';

export const productsEpic = combineEpics(
    getProductEpic,
    getProductsEpic,
    createProductEpic,
    deleteProductEpic
);