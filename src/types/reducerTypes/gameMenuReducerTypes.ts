export type gameView = 'Standard'|'Inverted';
export type noughtOrCross='nought'|'cross';
export type player = {
    name:string;
    noughtOrCross:noughtOrCross;
}; 
export type gameMenu = {
    gameView:gameView;
    hasSound:boolean;
} & Record<'playerOne'|'playerTwo',player> ;

export type gameMenuActionType = {
    type: string;
    payload?: any
}