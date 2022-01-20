import './cross.css';

import { useEffect } from 'react';

import crossSound from 'assets/sounds/crossSound.wav';
import { useSelector } from 'store/hooks';

export const Cross = () => {
    const hasSound=useSelector(state=>state.gameMenuReducer.hasSound);
    useEffect(()=>{
        if(hasSound){
            const sound=new Audio(crossSound);
            sound.play();
        }
    },[hasSound])
    return (
        <svg className='crossSvgContainer' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <line className='lineDiagonal1' x1="20" y1="20" x2="80" y2="80" stroke="#7D64BD" strokeWidth="6" strokeDasharray="145" strokeDashoffset="145" />
            <line className='lineDiagonal2' x1="80" y1="20" x2="20" y2="80" stroke="#7D64BD" strokeWidth="6" strokeDasharray="145" strokeDashoffset="145"/>
        </svg>
    )
}
