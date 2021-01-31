import { IAction, IState } from '../../../../shared/interfaces/common';

import ReducerHelper from '../../../../presentation/redux/reducers/helper';
import { ProductActionTypes } from '../../../../presentation/redux/actions/products';

const initialState: IState<any> = ReducerHelper.baseReducer();

export default function (
  state = initialState,
  action: IAction<any>
): IState<any> {
  switch (action.type) {
    // case ProductActionTypes.GET_PRODUCTS: {
    //   return ReducerHelper.baseProcessRequest(state, action);
    // }
    case ProductActionTypes.GET_PRODUCTS_SUCCESS: {
      return ReducerHelper.baseProcessSuccess(state, action);
    }
    case ProductActionTypes.GET_PRODUCTS_FAIL: {
      return ReducerHelper.baseProcessFailed(state, action);
    }
    case ProductActionTypes.DELETE_PRODUCT_SUCCESS: {
      const { data } = state;
      const newData = data.filter((item: any) => {
        return item.id !== action.payload.id;
      })
      return {
        ...state,
        data: newData
      };
    }
    case ProductActionTypes.DELETE_PRODUCT_FAIL: {
      return ReducerHelper.baseProcessFailed(state, action);
    }
    default:
      return state;
  }
}
