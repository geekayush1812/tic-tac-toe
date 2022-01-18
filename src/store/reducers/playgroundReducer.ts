import * as playgroundActionTypes
  from 'store/actionTypes/playgroundActionTypes';
import {
  playground,
  playgroundActionType,
} from 'types/reducerTypes/playgroundReducerTypes';
import { playgroundGridNotation } from 'utils/constants/playgroundGridNotation';

const initialPlaygroundState:playground={
    currentPlayer:undefined,
    gameBoardArray:Array(playgroundGridNotation.gridCount).fill(playgroundGridNotation.emptyGrid),
    crossSequence:[],
    noughtSequence:[]
};

const playgroundReducer=(
    state = initialPlaygroundState,
    action : playgroundActionType
) : playground => {
    switch(action.type){
        case playgroundActionTypes.UPDATE_CURRENT_PLAYER:
            return state;
        case playgroundActionTypes.UPDATE_GAME_BOARD_ARRAY:
            return state;
        case playgroundActionTypes.PUSH_TO_NOUGHT_SEQUENCE:
            return state;
        case playgroundActionTypes.PUSH_TO_CROSS_SEQUENCE:
            return state;
        default:
            return state;
    }
}
export { playgroundReducer };