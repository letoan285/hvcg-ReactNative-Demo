import Type from '../../type';
import { getApiController } from '..';
import { IResource } from '../../../../../shared/interfaces/common/resource';

const GetAll = (storeView?: string): IResource => ({
  Type: Type.Public,
  Path: `${getApiController(storeView)}/api/products`,
});

const CreateOne = (storeView?: string): IResource => ({
  Type: Type.Admin,
  Path: `${getApiController(storeView)}/api/products`,
});

const DeleteOne = (id: number, storeView?: string): IResource => ({
  Type: Type.Admin,
  Path: `${getApiController(storeView)}/api/products/${id}`,
});



export default {
  GetAll,
  CreateOne,
  DeleteOne
};
