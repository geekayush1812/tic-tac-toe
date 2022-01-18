import React from 'react';

import { gameView } from './reducerTypes/gameMenuReducerTypes';

export type SwitchButtonProps = {
    selectedItem: gameView;
    onClickItem: (item:gameView)=>void;
    dataItems:['Standard','Inverted'];
}
export type SwitchButtonItemProps = {
    children: React.ReactNode;
    item: gameView;
    onClick: (item:gameView)=>void;
    selectedItem: gameView;
}
export type CheckboxProps = {
    checked: boolean;
    onChange: ()=>void;
    className?: string;
}
export type NoughtOrCrossProps = {
    type:'nought'|'cross';
    className?:string;
}
export type SwitchNoughtAndCrossProps ={
    onClick:(event:React.MouseEvent<HTMLDivElement,MouseEvent>)=>void;
    className?:string;
}
export type TextInputProps ={
    label:string;
    value:string;
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
    className?:string;
}
export type ButtonProps = {
    text:string;
    disabled:boolean;
    onClick:(event:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void;
    className?:string;
}