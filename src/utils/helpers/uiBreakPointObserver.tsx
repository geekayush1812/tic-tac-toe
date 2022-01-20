import { UiBreakPointObserver } from 'types/helpersTypes';
import { matchMediaQuery } from 'utils/helpers';

const uiBreakPointObserver:UiBreakPointObserver=(breakPoints,setBreakPoints)=>{
    matchMediaQuery(breakPoints,setBreakPoints);

    window.addEventListener('resize',()=>{
        matchMediaQuery(breakPoints,setBreakPoints);
    })
}
export default uiBreakPointObserver;
