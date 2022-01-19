import * as appActionTypes from 'store/actionTypes/appActionTypes';
import {
  app,
  appAction,
} from 'types/reducerTypes/appReducerTypes';

const initialAppState:app= {
    selectedTab : "playground",
    gameResult: undefined,
    showGameResult: false,
    winnerNoughtAndCross: undefined,
    readyToPlay: false,
    playing: false
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
        case appActionTypes.UPDATE_GAME_RESULT:
            if(action.payload){
                return {
                    ...state,
                    gameResult:action.payload,
                    showGameResult:true,
                }
            }
            return state;
        case appActionTypes.UPDATE_WINNER_NOUGHT_AND_CROSS:
            return {
                ...state,
                winnerNoughtAndCross:action.payload
            };
        case appActionTypes.UPDATE_READY_TO_PLAY:
            return {
                ...state,
                readyToPlay:action.payload
            }
        case appActionTypes.UPDATE_PLAYING:
            return {
                ...state,
                playing:action.payload
            }
        case appActionTypes.PARTIAL_APP_RESET_TO_PLAY_AGAIN:
            return {
                ...state,
                gameResult: undefined,
                showGameResult: false,
                winnerNoughtAndCross: undefined
            }
        default:
            return state;
    }
}