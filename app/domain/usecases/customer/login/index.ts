import { IUseCase } from '../../../../shared/interfaces/common/usecase';
import ResponseModel from '../../../../models/response';
import CustomerRepository from '../../../../data/repository/customer';

export default class LoginAdminUseCase implements IUseCase {
  private customerRepository: CustomerRepository;

  constructor(public email: string, public password: string) {
    this.customerRepository = new CustomerRepository();
  }

  validate = (): boolean => {
    if (this.email && this.password) {
      return true;
    }
    return false;
  };

  execute = (): Promise<ResponseModel<string>> => {
    return new Promise((resolve, reject) => {
      if (this.validate()) {
        this.customerRepository.loginUser(this.email, this.password)
          .then((response: any) => {
            const data = response && response.data;
            // debugger
            if (data) {
              this.customerRepository.saveToken(data.data.accessToken);
              resolve(data.data);
            } else {
              reject(ResponseModel.createError(500, 'Customer token is null'));
            }
          })
          .catch((error) => {
            resolve(error);
          });
      }

    });
  };
}
