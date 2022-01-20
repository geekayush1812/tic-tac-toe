import { leaderboardUserDetails } from 'types/viewsTypes';

export type leaderboard = {
    leaderboard: leaderboardUserDetails
}
export type leaderboardAction = {
    type:string;
    payload?:any
}