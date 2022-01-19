import './gameResult.css';

import {
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

import { ReactComponent as DrawIcon } from 'assets/svg/scale.svg';
import { ReactComponent as WinnerIcon } from 'assets/svg/winner.svg';
import { Backdrop } from 'common/Backdrop/Backdrop';
import { useSelector } from 'store/hooks';
import { Button } from 'ui/Button/Button';

const GameResultCore = () => {
    const [mounted,setMounted]=useState(false);
    const [resultMessage,setResultMessage]=useState("");
    const {gameResult,winnerNoughtAndCross} = useSelector(state=>state.appReducer);
    const {playerOne,playerTwo} = useSelector(state=>state.gameMenuReducer);
    const isGameDraw = gameResult === 'draw';
    const gameHasWinner = gameResult === 'winner';
    useLayoutEffect(()=>{
        setMounted(true);
    },[])
    useEffect(()=>{
        setResultMessage("It's a Draw");
    },[isGameDraw]);
    useEffect(()=>{
        if(winnerNoughtAndCross){
            const winnerPlayer = [playerOne,playerTwo].find(player=>player.noughtOrCross === winnerNoughtAndCross);
            setResultMessage(`${winnerPlayer?.name} Won!!`)
        }
    },[gameHasWinner, playerOne, playerTwo, winnerNoughtAndCross])
    return (
        <Backdrop className='flexCenter'>
            <div className={`gameResultWrapperCard ${mounted?'fadeIn':''}`}>
                <div className="resultContainer">
                    <h2>{resultMessage}</h2>
                    {
                        isGameDraw ? <DrawIcon className='resultIcon'/> : null
                    }
                    {
                        gameHasWinner ? <WinnerIcon className='resultIcon' /> : null
                    }
                </div>
                <div className="actionButtonContainer">
                    <Button text='Launch new game' className='secondaryButton' disabled={false} onClick={()=>{}} />
                    <Button text='Play again' disabled={false} onClick={()=>{}} />
                </div>
            </div>
        </Backdrop>
    )
}

const gameResultElement:HTMLElement=document.getElementById('gameResult') as HTMLElement;
export const GameResult=()=>{
    return ReactDOM.createPortal(<GameResultCore />,gameResultElement);
}
