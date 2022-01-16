import { MatchMediaQuery } from 'types/helpersTypes';
import { UiBreakPoints } from 'utils/constants/uiBreakPoints';

export const matchMediaQuery:MatchMediaQuery=(breakPoints,setBreakPoints)=>{
    const breakPointKeys=Object.keys(breakPoints) as Array<keyof UiBreakPoints>;
    for(let key of breakPointKeys){
        if(window.matchMedia(`${breakPoints[key]}`).matches){
            setBreakPoints(key);
        }
    }
}
