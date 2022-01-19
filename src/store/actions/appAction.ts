import { SET_SELECTED_TAB } from 'store/actionTypes/appActionTypes';
import { app } from 'types/reducerTypes/appReducerTypes';

export const setSelectedTab = (tab:app['selectedTab'])=>({
    type : SET_SELECTED_TAB,
    payload: tab
})