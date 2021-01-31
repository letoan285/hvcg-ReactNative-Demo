import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { IAction } from '../../../../shared/interfaces/common';
import {
    ProductActionTypes,
    getProductsSuccess,
    createProductSuccess,
    createProductFail,
    deleteProductSuccess,
    deleteProductFail,
    getProductsFail
} from '../../../../presentation/redux/actions/products';

import ProductUseCase from '../../../../domain/usecases/products';
export const deleteProductEpic = (action$: any): any =>
    action$.pipe(
        ofType(ProductActionTypes.REMOVE_PRODUCT),
        exhaustMap((action: IAction<any>) => {
            return new Observable((obs) => {
                
                
                const useCase = new ProductUseCase.DeleteProductUseCase(action.payload);
                useCase.execute().then((response: any) => {
                    if (response) {
                        obs.next(deleteProductSuccess(action.payload));
                        obs.complete();
                    } else {
                        obs.next(deleteProductFail('Something Wrong !'));
                        obs.complete();
                    }

                })

            });
        })
    );
