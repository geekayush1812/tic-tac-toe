import './gameMenu.css';

import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Backdrop } from 'common/Backdrop/Backdrop';
import { GameSettings } from 'common/GameSettings/GameSettings';
import { PlayerSettings } from 'common/PlayerSettings/PlayerSettings';
import {
  updatePlaying,
  updateReadyToPlay,
} from 'store/actions/appAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { Button } from 'ui/Button/Button';
import { isValidPlayerName } from 'utils/helpers/isValidPlayerName';

const GameMenu = () => {
    const readyToPlay=useSelector(state=>state.appReducer.readyToPlay);
    const playerOneName=useSelector(state=>state.gameMenuReducer.playerOne.name);
    const playerTwoname=useSelector(state=>state.gameMenuReducer.playerTwo.name);
    const dispatch=useDispatch();

    useEffect(()=>{
        if(isValidPlayerName(playerOneName) && isValidPlayerName(playerTwoname)){
            dispatch(updateReadyToPlay(true))
        }else{
            dispatch(updateReadyToPlay(false))
        }
    },[playerOneName,playerTwoname,dispatch])
    
    const handleClickPlayButton=()=>{
        dispatch(updatePlaying(true));
    }
    return (
        <Backdrop className='flexCenter'>
            <div className="gameMenuWrapperCard">
                <h2>Game Menu</h2>
                <GameSettings />
                <hr className='horizontalRule' />
                <PlayerSettings />
                <Button 
                    text='Play' 
                    className='playButton'  
                    disabled={!readyToPlay}
                    onClick={handleClickPlayButton}/>
            </div>
        </Backdrop>
    )
}

const gameMenuElement:HTMLElement=document.getElementById('gameMenu') as HTMLElement;
export const GameMenuWrapper=()=>{
    return ReactDOM.createPortal(<GameMenu />,gameMenuElement);
}