import { IUseCase } from '../../../shared/interfaces/common/usecase';
import ResponseModel from '../../../models/response';
import ProductRepository from '../../../data/repository/product';
import { IProduct } from '../../../shared/interfaces/product';

export default class GetProductsUseCase implements IUseCase {
    private productRepository: ProductRepository;


    constructor(public product: IProduct) {
        this.productRepository = new ProductRepository();
    }

    execute = (): Promise<ResponseModel<string>> => {
        return new Promise((resolve, reject) => {
            const product: any = this.product;
            product.slug = 'default-slug.html';
            product.tags = ['tag1'];
            product.short_description = 'short describtion';
            product.status = true;
            product.price = parseInt(product.price);
            this.productRepository.createProduct(product)
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
