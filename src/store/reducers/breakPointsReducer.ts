import * as breakPointsActionTypes
  from 'store/actionTypes/breakPointsActionTypes';
import type {
  breakPoints,
  breakPointsActionType,
} from 'types/reducerTypes/breakPointsReducerTypes';

const initialBreakPointState:breakPoints={
    breakPoint:'mobile'
}

const breakPointReducer=(
    state=initialBreakPointState,
    action:breakPointsActionType
):breakPoints=>{
    switch(action.type){
        case breakPointsActionTypes.UPDATE_UI_BREAK_POINT:
            return {
                ...state,
                breakPoint:action.payload
            };
        default:
            return state;
    }
}
export { breakPointReducer };