import { NestjsResource } from '../../../../data/gateway/api/resource';
import ResponseModel from '../../../../models/response';
import getConfig from '../../../setting';
import ApiGateway from '../../../../data/gateway/api';
import { IProduct } from '../../../../shared/interfaces/product';


const getAll = (): Promise<ResponseModel<string>> => {
  const apiGateway = ApiGateway.createAPIConnection(getConfig());
  const getProductResource = NestjsResource.Product.GetAll();

  return apiGateway.doGetRequest(getProductResource)
    .then((response: ResponseModel<string>) => {
      const { data } = response;
      return data;
    });
};

const createOne = (product: IProduct): Promise<ResponseModel<string>> => {
  const apiGateway = ApiGateway.createAPIConnection(getConfig());
  const createProductResource = NestjsResource.Product.CreateOne();

  return apiGateway.doPostRequest(createProductResource, product).then((response: ResponseModel<string>) => {
    const { data } = response;
    return data;
  });
};

const deleteProduct = (product: any): Promise<ResponseModel<string>> => {
  const apiGateway = ApiGateway.createAPIConnection(getConfig());
  

 

  const deleteResource = NestjsResource.Product.DeleteOne(product.id);

  return apiGateway.doDeleteRequest(deleteResource).then((response: ResponseModel<string>) => {
    const { data } = response;
    return data;
  });
};

export default {
  getAll,
  createOne,
  deleteProduct
};
