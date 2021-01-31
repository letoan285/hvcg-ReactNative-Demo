import { IAction, IState } from '../../../../shared/interfaces/common';

import ReducerHelper from '../../../../presentation/redux/reducers/helper';

const initialState: IState<any> = ReducerHelper.baseReducer();

export default function (
    state = initialState,
    action: IAction<any>
): IState<any> {
    switch (action.type) {
      
        default:
            return state;
    }
}
