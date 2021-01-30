import { IUseCase } from '../../../shared/interfaces/common/usecase';
import ResponseModel from '../../../models/response';
import CategoryRepository from '../../../data/repository/category';

export default class GetCategoryUseCase implements IUseCase {
    private categoryRepository: CategoryRepository;

    constructor(public id: number) {
        this.categoryRepository = new CategoryRepository();
    }

    execute = (): Promise<ResponseModel<string>> => {
        return new Promise((resolve, reject) => {
            this.categoryRepository.getCategory(this.id)
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
