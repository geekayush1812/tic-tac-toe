import { UiBreakPointObserver } from 'types/helpersTypes';

import { matchMediaQuery } from './matchMediaQuery';

export const uiBreakPointObserver:UiBreakPointObserver=(breakPoints,setBreakPoints)=>{
    matchMediaQuery(breakPoints,setBreakPoints);

    window.addEventListener('resize',()=>{
        matchMediaQuery(breakPoints,setBreakPoints);
    })
}