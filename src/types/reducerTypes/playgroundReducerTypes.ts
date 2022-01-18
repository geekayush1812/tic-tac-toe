export type currentPlayer = "playerOne" | "playerTwo" | undefined ;
export type playground = {
    currentPlayer : currentPlayer;
} & Record<'gameBoardArray'|'crossSequence'|'noughtSequence',number[]>;

export type playgroundActionType = {
    type:string;
    payload?:any
}