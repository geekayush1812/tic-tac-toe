import './gameResult.css';

import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

import drawSound from 'assets/sounds/drawSound.wav';
import winnerSound from 'assets/sounds/winSound.wav';
import { ReactComponent as DrawIcon } from 'assets/svg/scale.svg';
import { ReactComponent as WinnerIcon } from 'assets/svg/winner.svg';
import { Backdrop } from 'common/Backdrop/Backdrop';
import { batch } from 'react-redux';
import {
  partialAppResetToPlayAgain,
  resetApp,
} from 'store/actions/appAction';
import { resetGameMenu } from 'store/actions/gameMenuAction';
import { resetPlayground } from 'store/actions/playgroundAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { Button } from 'ui/Button/Button';
import { useMountAnimation } from 'utils/hooks/useMountAnimation';

const GameResultCore = () => {
    const mounted = useMountAnimation();
    const [resultMessage,setResultMessage]=useState("");
    const {gameResult,winnerNoughtAndCross} = useSelector(state=>state.appReducer);
    const {playerOne,playerTwo,hasSound} = useSelector(state=>state.gameMenuReducer);
    const dispatch = useDispatch();
    const isGameDraw = gameResult === 'draw';
    const gameHasWinner = gameResult === 'winner';
    useEffect(()=>{
        setResultMessage("It's a Draw");
    },[isGameDraw]);
    useEffect(()=>{
        if(winnerNoughtAndCross){
            const winnerPlayer = [playerOne,playerTwo].find(player=>player.noughtOrCross === winnerNoughtAndCross);
            setResultMessage(`${winnerPlayer?.name} Won!!`)
        }
    },[gameHasWinner, playerOne, playerTwo, winnerNoughtAndCross]);
    useEffect(()=>{
        if(resultMessage && hasSound){
            let sound:HTMLAudioElement;
            if(resultMessage === "It's a Draw"){
                sound= new Audio(drawSound);
            }else{
                sound=new Audio(winnerSound);
            }
            sound.play();
            return ()=>{
                sound.pause();
            }
        }
    },[hasSound, resultMessage])
    const batchResetAppToPlayAgain = useCallback(()=>{
        batch(()=>{
            dispatch(resetPlayground());
            dispatch(partialAppResetToPlayAgain());
        });
    },[dispatch]);
    const batchResetAppToLaunchNewGame = useCallback(()=>{
        batch(()=>{
            dispatch(resetPlayground());
            dispatch(resetGameMenu());
            dispatch(resetApp());
        })
    },[dispatch]);
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
                    <Button text='Launch new game' className='secondaryButton' disabled={false} onClick={batchResetAppToLaunchNewGame} />
                    <Button text='Play again' disabled={false} onClick={batchResetAppToPlayAgain} />
                </div>
            </div>
        </Backdrop>
    )
}

const gameResultElement:HTMLElement=document.getElementById('gameResult') as HTMLElement;
export const GameResult=()=>{
    return ReactDOM.createPortal(<GameResultCore />,gameResultElement);
}
