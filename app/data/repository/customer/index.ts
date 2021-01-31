import { IUser } from '../../../models/user';
import CustomerCloud from './cloud';
import CustomerStorage from './storage';

export default class CustomerRepository {

  loginUser = (email: string, password: string) => {
    return CustomerCloud.login(email, password);
  };

  registerUser = (user: IUser) => {
    return CustomerCloud.register(user);
  };

  logoutUser = () => {
    return CustomerCloud.logout();
  };

  /**
   *
   * @param user
   * @returns {Promise<ResponseModel<any>>}
   */
  setUser = (user: any) => {
    return CustomerStorage.setUser(user);
  };

  /**
   *
   * @returns {Promise<ResponseModel<string>>}
   */
  getUser = () => {
    return CustomerStorage.getUser();
  };

  /**
   *
   * @param token
   * @returns {Promise<ResponseModel<any>>}
   */
  saveToken = (token: any) => {
    return CustomerStorage.setAuthToken(token);
  };

  /**
   *
   *
   * @memberof UserRepository
   */
  removeToken = () => {
    return CustomerStorage.removeAuthToken();
  };

  setCustomerToken = (token: string) => CustomerStorage.setAuthToken(token);
}
