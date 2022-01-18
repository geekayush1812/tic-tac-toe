import './gameBoardGrid.css';

import {
  GameBoardGridBlock,
} from 'common/GameBoardGridBlock/GameBoardGridBlock';
import { useSelector } from 'store/hooks';
import { blockType } from 'types/commonTypes';
import { playgroundGridNotation } from 'utils/constants/playgroundGridNotation';

export const GameBoardGrid = () => {
    const gameBoardArray=useSelector(state=>state.playgroundReducer.gameBoardArray);
    const chooseGridType = (gridValue:number):blockType => {
        if(gridValue === playgroundGridNotation.noughtGrid) return 'nought';
        if(gridValue === playgroundGridNotation.crossGrid)  return 'cross';
        return 'empty';
    }
    const renderGameBoardGridBlock = (item:number,index:number)=>{
        return <GameBoardGridBlock key={index} blockType={chooseGridType(item)} />
    }
    return (
        <div className="gameBoardGrid">
            {
                gameBoardArray.map(renderGameBoardGridBlock)
            }
        </div>
    )
}
