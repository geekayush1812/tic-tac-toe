export type noughtOrCross='nought'|'cross';
export type player = {
    name:string;
    noughtOrCross:noughtOrCross;
}; 
export type gameMenu = {
    hasSound:boolean;
} & Record<'playerOne'|'playerTwo',player> ;

export type gameMenuActionType = {
    type: string;
    payload?: any
}