import * as gameMenuActionTypes from 'store/actionTypes/gameMenuActionTypes';
import {
  gameMenu,
  gameMenuActionType,
} from 'types/reducerTypes/gameMenuReducerTypes';

const initialGameMenuState:gameMenu={
    hasSound:true,
    playerOne:{
        name:'',
        noughtOrCross:'nought'
    },
    playerTwo:{
        name:'',
        noughtOrCross:'cross'
    }
};

const gameMenuReducer=(
    state=initialGameMenuState,
    action:gameMenuActionType
) : gameMenu => {
    switch(action.type){
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
        case gameMenuActionTypes.RESET_GAME_MENU:
            return initialGameMenuState;
        default:
            return state;
    }
}
export { gameMenuReducer };