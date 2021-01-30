import { IUseCase } from '../../../../shared/interfaces/common/usecase';
import ResponseModel from '../../../../models/response';
import CustomerRepository from '../../../../data/repository/customer';
import { IUser } from '../../../../models/user';


export default class RegisterUserUseCase implements IUseCase {
  private customerRepository: CustomerRepository;

  constructor(public user: IUser) {
    this.customerRepository = new CustomerRepository();
  }

  validate = (): boolean => {
    if (this.user.email && this.user.password) {
      return true;
    }
    return false;
  };

  execute = (): Promise<ResponseModel<string>> => {
    return new Promise((resolve, reject) => {
      if (this.validate()) {
        this.customerRepository.registerUser(this.user).then((response: any) => {
          const data = response && response.data;
          resolve(data.data);
        })
          .catch((error) => {
            resolve(error);
          });
      }

    });
  };
}
