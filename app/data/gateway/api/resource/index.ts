import Customer from './customer';
import Common from './common';
import Product from './product';
import Category from './category';

// export const getApiController = (storeView = 'jp') => storeView ? `rest/V1` : 'rest/V1';
export const getApiController = (storeView = 'th'): string =>
  storeView ? `` : '';

export const NestjsResource = {
  Customer,
  Common,
  Product,
  Category
};
