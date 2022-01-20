import './gameBoardGrid.css';

import {
  useCallback,
  useEffect,
} from 'react';

import { GameBoardGridBlock } from 'common/GameBoardGridBlock';
import { batch } from 'react-redux';
import {
  updateGameResult,
  updateWinnerNoughtAndCross,
} from 'store/actions/appAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { blockType } from 'types/commonTypes';
import { noughtOrCross } from 'types/reducerTypes/gameMenuReducerTypes';
import { playgroundGridNotation } from 'utils/constants';
import { checkWinner } from 'utils/helpers';

const GameBoardGrid = () => {
    const {gameBoardArray,crossSequence,noughtSequence}=useSelector(state=>state.playgroundReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        const hasGameBoardHaveEmptyGrid = gameBoardArray.includes(playgroundGridNotation.emptyGrid);
        if(!hasGameBoardHaveEmptyGrid){
            dispatch(updateGameResult("draw"))
        }
    },[dispatch, gameBoardArray])
    const batchUpdateWinner = useCallback((noughtOrCross:noughtOrCross)=>{
        batch(()=>{
            dispatch(updateGameResult("winner"));
            dispatch(updateWinnerNoughtAndCross(noughtOrCross));
        })
    },[dispatch]);
    useEffect(()=>{
        let hasNoughtWon = checkWinner(noughtSequence);
        if(hasNoughtWon){
            batchUpdateWinner("nought");
        }
    },[batchUpdateWinner, dispatch, noughtSequence])
    useEffect(()=>{
        let hasCrossWon = checkWinner(crossSequence);
        if(hasCrossWon){
            batchUpdateWinner("cross");
        }
    },[batchUpdateWinner, crossSequence, dispatch]);
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
        <div className="gb34gameBoardGrid">
            {
                gameBoardArray.map(renderGameBoardGridBlock)
            }
        </div>
    )
}
export default GameBoardGrid
