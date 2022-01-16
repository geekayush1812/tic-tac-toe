import { UiBreakPoints } from 'utils/constants/uiBreakPoints';

type BreakPointSetter=(breakPoint:keyof UiBreakPoints)=>void;

export type UiBreakPointObserver=(breakPoints:UiBreakPoints,setBreakPoints:BreakPointSetter)=>void;
export type MatchMediaQuery=(breakPoints:UiBreakPoints,setBreakPoints:BreakPointSetter)=>void;