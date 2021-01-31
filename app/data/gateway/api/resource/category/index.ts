import Type from '../../type';
import { getApiController } from '..';
import { IResource } from '../../../../../shared/interfaces/common/resource';

const GetAll = (storeView?: string): IResource => ({
  Type: Type.Public,
  Path: `${getApiController(storeView)}/api/categories`,
});

const CreateOne = (storeView?: string): IResource => ({
  Type: Type.Admin,
  Path: `${getApiController(storeView)}/api/categories`,
});

const DeleteOne = (id: number, storeView?: string): IResource => ({
  Type: Type.Admin,
  Path: `${getApiController(storeView)}/api/categories/${id}`,
});
const GetOne = (id: number, storeView?: string): IResource => ({
  Type: Type.Public,
  Path: `${getApiController(storeView)}/api/categories/${id}`,
});


export default {
  GetAll,
  CreateOne,
  DeleteOne,
  GetOne
};
