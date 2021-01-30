import { IAction, IState } from '../../../../shared/interfaces/common';

import ReducerHelper from '../../../../presentation/redux/reducers/helper';
import { ProductActionTypes } from '../../../../presentation/redux/actions/products';

const initialState: IState<any> = ReducerHelper.baseReducer();

export default function (
  state = initialState,
  action: IAction<any>
): IState<any> {
  switch (action.type) {
    case ProductActionTypes.CLEAR_DATA: {
        return {
            ...state,
            data: undefined
        };
    }
    case ProductActionTypes.CREATE_PRODUCT: {
      return ReducerHelper.baseProcessRequest(state, action);
    }
    case ProductActionTypes.CREATE_PRODUCT_SUCCESS: {
      return ReducerHelper.baseProcessSuccess(state, action);
    }
    case ProductActionTypes.CREATE_PRODUCT_FAIL: {
      return ReducerHelper.baseProcessFailed(state, action);
    }
    default:
      return state;
  }
}
