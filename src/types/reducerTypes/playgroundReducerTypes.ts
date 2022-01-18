import { player } from './gameMenuReducerTypes';

export type playground = {
    currentPlayer : player | undefined ;
} & Record<'gameBoardArray'|'crossSequence'|'noughtSequence',number[]>;

export type playgroundActionType = {
    type:string;
    payload?:any
}