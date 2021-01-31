import Type from '../../type';
import { getApiController } from '..';
import { IResource } from '../../../../../shared/interfaces/common/resource';

const Login = (storeView?: string): IResource => ({
  Type: Type.Public,
  Path: `${getApiController(storeView)}/auth/login`,
});

const Register = (storeView?: string): IResource => ({
  Type: Type.Public,
  Path: `${getApiController(storeView)}/api/users/register`,
});

const Singout = (storeView?: string): IResource => ({
  Type: Type.Public,
  Path: `${getApiController(storeView)}/sign_out`,
});

export default {
  Login,
  Singout,
  Register
};
