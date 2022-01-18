import * as playgroundActionTypes
  from 'store/actionTypes/playgroundActionTypes';
import {
  playground,
  playgroundActionType,
} from 'types/reducerTypes/playgroundReducerTypes';
import { playgroundGridNotation } from 'utils/constants/playgroundGridNotation';
import { pushToArray } from 'utils/helpers/pushToArray';

const initialPlaygroundState:playground={
    currentPlayer: "playerOne", // initially undefined , set it to playerOne or two (randomly) when use clicks Play or when gameBoardArray is changed
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
        default:
            return state;
    }
}
export { playgroundReducer };