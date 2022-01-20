import { UiBreakPoints } from 'utils/constants/uiBreakPoints';

import { player } from './reducerTypes/gameMenuReducerTypes';
import { leaderboardUser } from './viewsTypes';

type BreakPointSetter=(breakPoint:keyof UiBreakPoints)=>void;

export type UiBreakPointObserver=(breakPoints:UiBreakPoints,setBreakPoints:BreakPointSetter)=>void;
export type MatchMediaQuery=(breakPoints:UiBreakPoints,setBreakPoints:BreakPointSetter)=>void;

type newLeaderboardUserMethod = (player:player)=>leaderboardUser;
export type GetNewLeaderboardUser=Record<'winner'|'looser',newLeaderboardUserMethod>;

type findAndPUshPlayerInLeaderboardArg = {
    newPlayerDetails: leaderboardUser;
    player: player;
    result: "winner" | "looser";
} & Record<'newLeaderboard'|'leaderboard',leaderboardUser[]>
export type FindAndPushPlayerInLeaderboard = (arg:findAndPUshPlayerInLeaderboardArg)=>void;