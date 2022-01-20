import * as playgroundActionTypes
  from 'store/actionTypes/playgroundActionTypes';
import {
  playground,
  playgroundActionType,
} from 'types/reducerTypes/playgroundReducerTypes';
import { playgroundGridNotation } from 'utils/constants';
import { pushToArray } from 'utils/helpers';

const initialPlaygroundState:playground={
    currentPlayer: "playerOne",
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
            return {
                ...state,
                currentPlayer:action.payload
            };
        case playgroundActionTypes.UPDATE_GAME_BOARD_ARRAY:
            const updatedGameBoardArray = [...state.gameBoardArray];
            updatedGameBoardArray[action.payload.index] = action.payload.value;
            return {
                ...state,
                gameBoardArray:updatedGameBoardArray
            };
        case playgroundActionTypes.PUSH_TO_NOUGHT_SEQUENCE:
            const updatedNoughtSequence=pushToArray(state.noughtSequence,action.payload);
            return {
                ...state,
                noughtSequence:updatedNoughtSequence
            };
        case playgroundActionTypes.PUSH_TO_CROSS_SEQUENCE:
            const updatedCrossSequence=pushToArray(state.crossSequence,action.payload);
            return {
                ...state,
                crossSequence:updatedCrossSequence
            };
        case playgroundActionTypes.RESET_PLAYGROUND:
            return initialPlaygroundState;
        default:
            return state;
    }
}
export { playgroundReducer };