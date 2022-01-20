import { FindAndPushPlayerInLeaderboard } from 'types/helpersTypes';

export const findAndPushPlayerInLeaderboard:FindAndPushPlayerInLeaderboard = ({newLeaderboard,newPlayerDetails,leaderboard,player,result})=>{
    const playerIndex = leaderboard.findIndex((leaderboardPlayer)=>leaderboardPlayer.name === player.name);
    const isPlayerInLeaderboard = playerIndex !== -1;
    if(isPlayerInLeaderboard){
        const [playerLeaderboardDetails] = leaderboard.splice(playerIndex,1);
        const winnerOrLooser = result === 'winner' ? 'wonMatches' : 'lostMatches';
        playerLeaderboardDetails[winnerOrLooser]++;
        newLeaderboard.push(playerLeaderboardDetails);
    }else{
        newLeaderboard.push(newPlayerDetails);
    }
}