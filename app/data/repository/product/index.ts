import { IProduct } from '../../../shared/interfaces/product';
import ProductCloud from './cloud';
import ProductStorage from './storage';

export default class ProductRepository {

  getProducts = () => {
    return ProductCloud.getAll();
  };

  createProduct = (product: IProduct) => {
    return ProductCloud.createOne(product);
  };

  deleteProduct = (product: IProduct) => {
    return ProductCloud.deleteProduct(product);
  };

}
