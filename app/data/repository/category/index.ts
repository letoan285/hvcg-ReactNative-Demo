import { IProduct } from '../../../shared/interfaces/product';
import CategoryCloud from './cloud';

export default class CategoryRepository {

  getCategories = () => {
    return CategoryCloud.getAll();
  };
  getCategory = (id: number) => {
    return CategoryCloud.getOne(id);
  };

  createProduct = (product: IProduct) => {
    return CategoryCloud.createOne(product);
  };

  deleteProduct = (product: IProduct) => {
    return CategoryCloud.deleteProduct(product);
  };

}
