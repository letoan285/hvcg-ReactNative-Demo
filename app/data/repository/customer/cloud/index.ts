import { NestjsResource } from '../../../../data/gateway/api/resource';
import ResponseModel from '../../../../models/response';
import getConfig from '../../../setting';
import ApiGateway from '../../../../data/gateway/api';
import { IUser } from '../../../../models/user';

const login = (
  email: string,
  password: string
): Promise<ResponseModel<string>> => {
  const apiGateway = ApiGateway.createAPIConnection(getConfig());
  
  const loginResource = NestjsResource.Customer.Login();

  const body = {
    email,
    password,
  };
  return apiGateway.doPostRequest(loginResource, body);
};

const register = (user: IUser): Promise<ResponseModel<string>> => {
  const apiGateway = ApiGateway.createAPIConnection(getConfig());
  
  const registerResource = NestjsResource.Customer.Register();

  return apiGateway.doPostRequest(registerResource, user);
};

const logout = (): Promise<ResponseModel<string>> => {
  const apiGateway = ApiGateway.createAPIConnection(getConfig());
  const signupResource = NestjsResource.Customer.Singout();

  return apiGateway
    .doDeleteRequest(signupResource)
    .then((response: ResponseModel<string>) => {
      const { data } = response;
      return data;
    });
};

export default {
  login,
  logout,
  register
};
