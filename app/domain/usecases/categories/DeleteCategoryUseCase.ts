import { IUseCase } from '../../../shared/interfaces/common/usecase';
import ResponseModel from '../../../models/response';
import ProductRepository from '../../../data/repository/product';
import { IProduct } from '../../../shared/interfaces/product';

export default class DeleteCategoryUseCase implements IUseCase {
    private productRepository: ProductRepository;


    constructor(public product: IProduct) {
        this.productRepository = new ProductRepository();
    }

    execute = (): Promise<ResponseModel<string>> => {
        return new Promise((resolve, reject) => {
            const product: any = this.product;
     
            this.productRepository.deleteProduct(product)
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
