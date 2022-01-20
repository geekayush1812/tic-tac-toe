import { GetNewLeaderboardUser } from 'types/helpersTypes';

export const getNewLeaderboardUser:GetNewLeaderboardUser = {
    winner:(winnerPlayer)=>({
        name:winnerPlayer.name,
        wonMatches:1,
        lostMatches:0
    }),
    looser:(looserPlayer)=>({
        name:looserPlayer.name,
        wonMatches:0,
        lostMatches:1
    })
};