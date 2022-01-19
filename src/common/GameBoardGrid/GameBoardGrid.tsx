import './gameBoardGrid.css';

import { useEffect } from 'react';

import {
  GameBoardGridBlock,
} from 'common/GameBoardGridBlock/GameBoardGridBlock';
import { useSelector } from 'store/hooks';
import { blockType } from 'types/commonTypes';
import { playgroundGridNotation } from 'utils/constants/playgroundGridNotation';
import { checkWinner } from 'utils/helpers/checkWinner';

export const GameBoardGrid = () => {
    const {gameBoardArray,crossSequence,noughtSequence}=useSelector(state=>state.playgroundReducer);
    useEffect(()=>{
        let hasNoughtWon = checkWinner(noughtSequence);
        if(hasNoughtWon){
            alert("nought won");
        }
    },[noughtSequence])
    useEffect(()=>{
        let hasCrossWon = checkWinner(crossSequence);
        if(hasCrossWon){
            alert("cross won");
        }
    },[crossSequence]);
    useEffect(()=>{
        const hasGameBoardHaveEmptyGrid = gameBoardArray.includes(playgroundGridNotation.emptyGrid);
        if(!hasGameBoardHaveEmptyGrid){
            alert("draw")
        }
    },[gameBoardArray])
    const chooseGridType = (gridValue:number):blockType => {
        if(gridValue === playgroundGridNotation.noughtGrid) return 'nought';
        if(gridValue === playgroundGridNotation.crossGrid)  return 'cross';
        return 'empty';
    }
    const renderGameBoardGridBlock = (item:number,index:number)=>{
        return <GameBoardGridBlock 
                    key={index} 
                    gridIndex={index} 
                    blockType={chooseGridType(item)} />
    }
    return (
        <div className="gameBoardGrid">
            {
                gameBoardArray.map(renderGameBoardGridBlock)
            }
        </div>
    )
}
