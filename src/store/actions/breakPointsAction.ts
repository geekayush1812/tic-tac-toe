import {
  UPDATE_UI_BREAK_POINT,
} from 'store/actionTypes/breakPointsActionTypes';
import { UiBreakPoints } from 'utils/constants/uiBreakPoints';

export const updateBreakPoint=(breakPoint:keyof UiBreakPoints)=>({
    type:UPDATE_UI_BREAK_POINT,
    payload:breakPoint
})
