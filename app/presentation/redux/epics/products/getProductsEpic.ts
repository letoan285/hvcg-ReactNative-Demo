import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { IAction } from '../../../../shared/interfaces/common';
import {
    ProductActionTypes,
    getProductsSuccess,
    getProductsFail
} from '../../../../presentation/redux/actions/products';

import ProductUseCase from '../../../../domain/usecases/products';
import axios from 'axios';
export const getProductsEpic = (action$: any): any =>
    action$.pipe(
        ofType(ProductActionTypes.GET_PRODUCTS),
        exhaustMap((action: IAction<any>) => {
            return new Observable((obs) => {
                const useCase = new ProductUseCase.GetProductsUseCase();
  
                useCase.execute().then((response: any) => {
                    if (response) {
                        obs.next(getProductsSuccess(response));
                        obs.complete();
                    } else {
                        obs.next(getProductsFail('Something Wrong !'));
                        obs.complete();
                    }

                })

            });
        })
    );
