import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { IAction } from '../../../../shared/interfaces/common';
import {
    ProductActionTypes,
    getProductsSuccess,
    createProductSuccess,
    createProductFail,
    getProductsFail
} from '../../../../presentation/redux/actions/products';

import ProductUseCase from '../../../../domain/usecases/products';
export const createProductEpic = (action$: any): any =>
    action$.pipe(
        ofType(ProductActionTypes.CREATE_PRODUCT),
        exhaustMap((action: IAction<any>) => {
            return new Observable((obs) => {
                
                const useCase = new ProductUseCase.CreateProductsUseCase(action.payload);
                useCase.execute().then((response: any) => {
                    if (response) {
                        obs.next(createProductSuccess(response));
                        obs.complete();
                    } else {
                        obs.next(createProductFail('Something Wrong !'));
                        obs.complete();
                    }

                })

            });
        })
    );
