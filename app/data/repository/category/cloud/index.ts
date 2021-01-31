import { NestjsResource } from '../../../../data/gateway/api/resource';
import ResponseModel from '../../../models/response';
import getConfig from '../../../setting';
import ApiGateway from '../../../..//data/gateway/api';
import { IProduct } from '../../../..//shared/interfaces/product';



const getAll = (): Promise<ResponseModel<string>> => {
  const apiGateway = ApiGateway.createAPIConnection(getConfig());
  const getCategoryResource = NestjsResource.Category.GetAll();

  return apiGateway.doGetRequest(getCategoryResource)
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


const getOne = (id: number): Promise<ResponseModel<string>> => {
  const apiGateway = ApiGateway.createAPIConnection(getConfig());
  const getCategoryResource = NestjsResource.Category.GetOne(id);

  return apiGateway.doGetRequest(getCategoryResource)
    .then((response: ResponseModel<string>) => {
      const { data } = response;
      debugger
      return data;
    });
};

export default {
  getAll,
  createOne,
  deleteProduct,
  getOne
};
