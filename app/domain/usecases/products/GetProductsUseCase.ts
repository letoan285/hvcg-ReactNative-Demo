import { IUseCase } from '../../../shared/interfaces/common/usecase';
import ResponseModel from '../../../models/response';
import ProductRepository from '../../../data/repository/product';

export default class GetProductsUseCase implements IUseCase {
    private productRepository: ProductRepository;

    constructor() {
        this.productRepository = new ProductRepository();
    }

    execute = (): Promise<ResponseModel<string>> => {
        return new Promise((resolve, reject) => {
            this.productRepository
                .getProducts()
                .then((response: any) => {
                    const data = response && response.data;
                    if (data) {
                        resolve(data);
                    } else {
                        reject(ResponseModel.createError(500, 'Customer token is null'));
                    }
                })
                .catch((error: any) => {
                    resolve(error);
                });
        });
    };
}
