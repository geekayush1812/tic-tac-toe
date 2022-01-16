import * as breakPointsActionTypes
  from 'store/actionTypes/breakPointsActionTypes';
import type {
  actionType,
  breakPoints,
} from 'types/reducerTypes/breakPointsReducerTypes';

const initialBreakPointState:breakPoints={
    breakPoint:'mobile'
}

const breakPointReducer=(
    state:breakPoints=initialBreakPointState,
    action:actionType
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