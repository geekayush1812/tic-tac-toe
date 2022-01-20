import {
  PARTIAL_APP_RESET_TO_PLAY_AGAIN,
  RESET_APP,
  SET_SELECTED_TAB,
  UPDATE_GAME_RESULT,
  UPDATE_PLAYING,
  UPDATE_READY_TO_PLAY,
  UPDATE_WINNER_NOUGHT_AND_CROSS,
} from 'store/actionTypes/appActionTypes';
import {
  gameResult,
  selectedTab,
} from 'types/reducerTypes/appReducerTypes';
import { noughtOrCross } from 'types/reducerTypes/gameMenuReducerTypes';

export const setSelectedTab = (tab:selectedTab)=>({
    type : SET_SELECTED_TAB,
    payload: tab
})
export const updateGameResult = (gameResult:gameResult)=>({
    type:UPDATE_GAME_RESULT,
    payload:gameResult
})
export const updateWinnerNoughtAndCross = (noughtOrCross:noughtOrCross) => ({
    type:UPDATE_WINNER_NOUGHT_AND_CROSS,
    payload:noughtOrCross
})
export const updateReadyToPlay = (status:boolean)=>({
    type:UPDATE_READY_TO_PLAY,
    payload:status
})
export const updatePlaying = (playing:boolean)=>({
    type:UPDATE_PLAYING,
    payload:playing
})
export const partialAppResetToPlayAgain = ()=> ({
    type:PARTIAL_APP_RESET_TO_PLAY_AGAIN
})
export const resetApp = ()=>({
    type:RESET_APP
})