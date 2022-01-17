export type gameView = 'Standard'|'Inverted';
export type noughtOrCross='nought'|'cross';
type player = {
    name:string;
    noughtOrCross:noughtOrCross;
}; 
export type gameMenu = {
    gameView:gameView;
} & {
    [key in 'readyToPlay'| 'playing'|'hasSound'] : boolean;
} & {
    [key in 'playerOne'|'playerTwo']: player;
}
export type gameMenuActionType = {
    type: string;
    payload?: any
}