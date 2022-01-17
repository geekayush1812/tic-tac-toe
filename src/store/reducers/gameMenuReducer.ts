import * as gameMenuActionTypes from 'store/actionTypes/gameMenuActionTypes';
import {
  gameMenu,
  gameMenuActionType,
} from 'types/reducerTypes/gameMenuReducerTypes';

const initialGameMenuState:gameMenu={
    gameView:'Standard',
    hasSound:true,
    playerOne:{
        name:'',
        noughtOrCross:'nought'
    },
    playerTwo:{
        name:'',
        noughtOrCross:'cross'
    },
    readyToPlay:false,
    playing:false,
};

const gameMenuReducer=(
    state=initialGameMenuState,
    action:gameMenuActionType
) : gameMenu => {
    switch(action.type){
        case gameMenuActionTypes.UPDATE_GAME_VIEW:
            return {
                ...state,
                gameView:action.payload
            };
        case gameMenuActionTypes.UPDATE_GAME_SOUND:
            return {
                ...state,
                hasSound:!state.hasSound
            };
        case gameMenuActionTypes.UPDATE_PLAYER_ONE_NAME:
            return {
                ...state,
                playerOne:{
                    ...state.playerOne,
                    name:action.payload,
                }
            };
        case gameMenuActionTypes.UPDATE_PLAYER_TWO_NAME:
            return {
                ...state,
                playerTwo:{
                    ...state.playerTwo,
                    name:action.payload,
                }
            };
        case gameMenuActionTypes.SWITCH_PLAYER_NOUGHT_CROSS_CHOICE:
            return {
                ...state,
                playerOne:{
                    ...state.playerOne,
                    noughtOrCross:state.playerTwo.noughtOrCross,
                },
                playerTwo:{
                    ...state.playerTwo,
                    noughtOrCross:state.playerOne.noughtOrCross,
                }
            };
        case gameMenuActionTypes.UPDATE_READY_TO_PLAY:
            return {
                ...state,
                readyToPlay:action.payload
            }
        case gameMenuActionTypes.UPDATE_PLAYING:
            return {
                ...state,
                playing:action.payload
            }
        default:
            return state;
    }
}
export { gameMenuReducer };