import {
  PUSH_TO_CROSS_SEQUENCE,
  PUSH_TO_NOUGHT_SEQUENCE,
  RESET_PLAYGROUND,
  UPDATE_CURRENT_PLAYER,
  UPDATE_GAME_BOARD_ARRAY,
} from 'store/actionTypes/playgroundActionTypes';
import { currentPlayer } from 'types/reducerTypes/playgroundReducerTypes';

export const updateGameBoardArray=(index:number,value:number)=>({
    type:UPDATE_GAME_BOARD_ARRAY,
    payload:{
        index,
        value
    }
})
export const pushToCrossSequence=(index:number)=>({
    type:PUSH_TO_CROSS_SEQUENCE,
    payload:index
})
export const pushToNoughtSequence=(index:number)=>({
    type:PUSH_TO_NOUGHT_SEQUENCE,
    payload:index
})
export const updateCurrentPlayer=(currentPlayer:currentPlayer)=>({
    type: UPDATE_CURRENT_PLAYER,
    payload: currentPlayer
})
export const resetPlayground = ()=>({
    type:RESET_PLAYGROUND
})