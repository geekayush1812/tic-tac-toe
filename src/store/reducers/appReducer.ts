import * as appActionTypes from 'store/actionTypes/appActionTypes';
import {
  app,
  appAction,
} from 'types/reducerTypes/appReducerTypes';

const initialAppState:app= {
    selectedTab : "playground"
}

export const appReducer = (
    state = initialAppState,
    action: appAction
) : app => {
    switch(action.type){
        case appActionTypes.SET_SELECTED_TAB:
            return {
                ...state,
                selectedTab:action.payload
            }
        default:
            return state;
    }
}