import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { IAction } from '../../../../shared/interfaces/common';
import {
    ProductActionTypes,
    getProductsSuccess,
    getProductsFail
} from '../../../../presentation/redux/actions/products';

export const getProductEpic = (action$: any): any =>
    action$.pipe(
        ofType(ProductActionTypes.GET_PRODUCTS),
        exhaustMap((action: IAction<any>) => {
            return new Observable((obs) => {
                const { payload }: any = action;
                if (payload) {
                    obs.next(getProductsSuccess(payload));
                    obs.complete();
                } else {
                    obs.next(getProductsFail(payload));
                    obs.complete();
                }


            });
        })
    );
