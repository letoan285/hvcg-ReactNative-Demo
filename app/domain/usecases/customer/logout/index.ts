import { IUseCase } from '../../../../shared/interfaces/common/usecase';
import ResponseModel from '../../../../models/response';
import CustomerRepository from '../../../../data/repository/customer';

export default class LogoutUserUseCase implements IUseCase {
  private customerRepository: CustomerRepository;

  constructor() {
    this.customerRepository = new CustomerRepository();
  }

  validate = (): boolean => {
    return true;
  };

  execute = (): Promise<ResponseModel<string>> => {
    return new Promise((resolve, reject) => {
      this.customerRepository
        .logoutUser()
        .then((response: any) => {
          const data = response && response.data;

          if (data) {
            resolve(data);
          } else {
            reject(ResponseModel.createError(500, 'Customer token is null'));
          }
        })
        .catch((error) => {
          resolve(error);
        });
    });
  };
}
