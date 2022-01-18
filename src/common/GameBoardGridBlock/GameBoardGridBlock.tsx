import './gameBoardGridBlock.css';

import { batch } from 'react-redux';
import {
  pushToCrossSequence,
  pushToNoughtSequence,
  updateCurrentPlayer,
  updateGameBoardArray,
} from 'store/actions/playgroundAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { GameBoardGridBlockProps } from 'types/commonTypes';
import { Cross } from 'ui/Cross/Cross';
import { Nought } from 'ui/Nought/Nought';
import { playgroundGridNotation } from 'utils/constants/playgroundGridNotation';

export const GameBoardGridBlock = ({blockType,gridIndex}:GameBoardGridBlockProps) => {
    const currentPlayer = useSelector(state=>state.playgroundReducer.currentPlayer)
    const gameReducerState = useSelector(state=>state.gameMenuReducer);
    const dispatch = useDispatch();
    const handleClickGridBlock=()=>{
        if(currentPlayer){
            batch(()=>{
                dispatch(updateGameBoardArray(gridIndex,playgroundGridNotation[`${gameReducerState[currentPlayer].noughtOrCross}Grid`]))
                if(gameReducerState[currentPlayer].noughtOrCross === 'nought'){
                    dispatch(pushToNoughtSequence(gridIndex));
                }else{
                    dispatch(pushToCrossSequence(gridIndex));
                }
                dispatch(updateCurrentPlayer(currentPlayer==='playerOne'?'playerTwo':'playerOne'))
            })
        }
    }
    
    return (
        <div onClick={handleClickGridBlock} className={`gridBlock ${blockType === 'empty' ? 'emptyGridBlock':''}`}>
            {blockType === 'cross' ? <Cross /> : null }
            {blockType === 'nought' ? <Nought /> : null}
        </div>
    )
}
