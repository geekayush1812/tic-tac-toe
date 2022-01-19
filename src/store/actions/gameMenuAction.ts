import {
  SWITCH_PLAYER_NOUGHT_CROSS_CHOICE,
  UPDATE_GAME_SOUND,
  UPDATE_GAME_VIEW,
  UPDATE_PLAYER_ONE_NAME,
  UPDATE_PLAYER_TWO_NAME,
} from 'store/actionTypes/gameMenuActionTypes';
import { gameView } from 'types/reducerTypes/gameMenuReducerTypes';

export const updateGameView = (view:gameView)=>({
    type:UPDATE_GAME_VIEW,
    payload:view
})
export const updateGameSound = ()=>({
    type:UPDATE_GAME_SOUND
})
export const updatePlayerOneName = (name:string)=>({
    type:UPDATE_PLAYER_ONE_NAME,
    payload:name
})
export const updatePlayerTwoName = (name:string)=>({
    type:UPDATE_PLAYER_TWO_NAME,
    payload:name
})
export const switchPlayerNoughtAndCrossChoice = ()=>({
    type:SWITCH_PLAYER_NOUGHT_CROSS_CHOICE
})