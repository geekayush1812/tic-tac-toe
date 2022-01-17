import './gameSettings.css';

import { useState } from 'react';

import { Checkbox } from 'ui/Checkbox/Checkbox';
import { SwitchButton } from 'ui/SwitchButton/SwitchButton';

export const GameSettings = () => {
    const [selectedViewIndex,setSelectedViewIndex]=useState(0);
    const [hasSound,setHasSound]=useState(true);
    return (
        <>
            <div className="menuItem">
                <h3>Game View</h3>
                <div className="gameViewContainer">
                    <SwitchButton 
                        selectedIndex={selectedViewIndex} 
                        onClickItem={setSelectedViewIndex} 
                        dataItems={['Standard','Inverted']} />
                </div>
            </div>
            <div className="menuItem soundMenuItem">
                <h3>Sound</h3>
                <Checkbox 
                    className='checkBox'
                    checked={hasSound} 
                    onChange={()=>{
                        setHasSound(prevState=>!prevState);
                    }} />
            </div>
        </>
    )
}
