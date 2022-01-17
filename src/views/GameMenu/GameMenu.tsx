import './gameMenu.css';

import ReactDOM from 'react-dom';

import { Backdrop } from 'common/Backdrop/Backdrop';
import { GameSettings } from 'common/GameSettings/GameSettings';
import { PlayerSettings } from 'common/PlayerSettings/PlayerSettings';

const GameMenu = () => {
    
    return (
        <Backdrop className='flexCenter'>
            <div className="gameMenuWrapperCard">
                <h2>Game Menu</h2>
                <GameSettings />
                <hr className='horizontalRule' />
                <PlayerSettings />
            </div>
        </Backdrop>
    )
}

const gameMenuElement:HTMLElement=document.getElementById('gameMenu') as HTMLElement;
export const GameMenuWrapper=()=>{
    return ReactDOM.createPortal(<GameMenu />,gameMenuElement);
}