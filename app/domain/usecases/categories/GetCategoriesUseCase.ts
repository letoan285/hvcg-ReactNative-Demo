import { IUseCase } from '../../../shared/interfaces/common/usecase';
import ResponseModel from '../../../models/response';
import CategoryRepository from '../../../data/repository/category';

export default class GetCategoriesUseCase implements IUseCase {
    private categoryRepository: CategoryRepository;

    constructor() {
        this.categoryRepository = new CategoryRepository();
    }

    execute = (): Promise<ResponseModel<string>> => {
        return new Promise((resolve, reject) => {
            this.categoryRepository.getCategories()
                .then((response: any) => {
                    const data = response && response.data;
                    debugger
                    if (data) {
                        resolve(data);
                    } else {
                        reject(ResponseModel.createError(500, 'Token is null'));
                    }
                })
                .catch((error: any) => {
                    resolve(error);
                });
        });
    };
}
