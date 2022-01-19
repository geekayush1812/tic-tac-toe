import { noughtOrCross } from './gameMenuReducerTypes';

export type selectedTab = "playground" | "leaderboard";
export type gameResult = "winner" | "draw" | undefined;
export type app = {
    selectedTab: selectedTab;
    gameResult: gameResult;
    winnerNoughtAndCross: noughtOrCross | undefined;
} & Record<'showGameResult'|'playing'|'readyToPlay',boolean>;
export type appAction = {
    type: string;
    payload?: any
}