import StorageGateway from '../../../../data/gateway/storage';
import { TokenType, User } from '../../../constants';
// import ResponseModel from '../../../models/response';

const getUser = (): any => {
  return StorageGateway.doGetJson(User.Key);
};

const setUser = (user: any): any => {
  return StorageGateway.doUpdateJson(User.Key, user);
};

const setAuthToken = (token: string): any => {
  return StorageGateway.doUpdate(TokenType.Customer, token);
};

const getUserLocalStorage = (): any => {
  return StorageGateway.doGet(User.Key);
};

const removeAuthToken = (): any => {
  return StorageGateway.doDelete(TokenType.Customer);
};

/**
 *
 * @param deviceToken
 */
const saveDeviceToken = (
  deviceToken: string
): Promise<any> => {
  return StorageGateway.doUpdate(TokenType.DeviceToken, deviceToken);
};

/**
 *
 */
const getDeviceToken = (): Promise<any> => {
  return StorageGateway.doGet(TokenType.DeviceToken);
};

/**
 *
 */
const removeDeviceToken = (): Promise<any> => {
  return StorageGateway.doDelete(TokenType.DeviceToken);
};

export default {
  getUser,
  setUser,
  setAuthToken,
  removeAuthToken,
  saveDeviceToken,
  getDeviceToken,
  removeDeviceToken,
  getUserLocalStorage,
};
