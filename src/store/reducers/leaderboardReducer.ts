import * as leaderboardActionTypes
  from 'store/actionTypes/leaderboardActionTypes';
import {
  leaderboard,
  leaderboardAction,
} from 'types/reducerTypes/leaderboardReducerTypes';
import { localStorageKeys } from 'utils/constants';
import { setLocalStorageValue } from 'utils/helpers';

const initialLeaderboardState:leaderboard = {
    leaderboard:null
}

const leaderboardReducer = (
    state=initialLeaderboardState,
    action:leaderboardAction
):leaderboard=>{
    switch(action.type){
        case leaderboardActionTypes.UPDATE_LEADERBOARD:
            setLocalStorageValue(localStorageKeys.leaderboard,action.payload);
            return {
                ...state,
                leaderboard:action.payload
            };
        default:
            return state;
    }
}
export { leaderboardReducer };