import './nought.css';

import { useEffect } from 'react';

import noughtSound from 'assets/sounds/noughtSound.wav';
import { useSelector } from 'store/hooks';

export const Nought = () => {
    const hasSound=useSelector(state=>state.gameMenuReducer.hasSound);
    useEffect(()=>{
        if(hasSound){
            const sound=new Audio(noughtSound);
            sound.play();
        }
    },[hasSound])
    return (
        <svg className='noughtSvgContainer' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle className='nought' cx="50" cy="50" r="30" stroke="#8660A6" strokeWidth="6" fill="none" strokeDasharray={"190"} strokeDashoffset={"190"} />
        </svg> 
    )
}
