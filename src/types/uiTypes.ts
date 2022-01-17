export type SwitchButtonProps = {
    selectedIndex: number;
    onClickItem: (index:number)=>void;
    dataItems:[string,string];
}
export type SwitchButtonItemProps = {
    children: React.ReactNode;
    dataIndex: number;
    onClick: (index:number)=>void;
    selectedIndex: number;
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
    className?:string;
}