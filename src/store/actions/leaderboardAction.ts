import { UPDATE_LEADERBOARD } from 'store/actionTypes/leaderboardActionTypes';
import { leaderboardUser } from 'types/viewsTypes';

export const updateLeaderboard = (leaderboardPlayers:leaderboardUser[])=>({
    type: UPDATE_LEADERBOARD,
    payload: leaderboardPlayers
})