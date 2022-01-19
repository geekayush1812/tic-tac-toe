import './gameBoardGridBlock.css';

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
import {
  GameBoardGridBlockProps,
  getCurrentPlayerGridNotation,
} from 'types/commonTypes';
import { Cross } from 'ui/Cross/Cross';
import { Nought } from 'ui/Nought/Nought';
import { playgroundGridNotation } from 'utils/constants/playgroundGridNotation';

export const GameBoardGridBlock = ({blockType,gridIndex}:GameBoardGridBlockProps) => {
    const currentPlayer = useSelector(state=>state.playgroundReducer.currentPlayer)
    const gameReducerState = useSelector(state=>state.gameMenuReducer);
    const dispatch = useDispatch();
    const getCurrentPlayerGridNotation:getCurrentPlayerGridNotation = (currentPlayer) => {
        const currentPlayerNoughtOrCross = gameReducerState[currentPlayer].noughtOrCross;
        return playgroundGridNotation[`${currentPlayerNoughtOrCross}Grid`];
    }
    const toggleCurrentPlayer = () => {
        return currentPlayer === 'playerOne' ? 'playerTwo' : 'playerOne';
    }
    const handleClickGridBlock=()=>{
        const isBlockEmpty = blockType === 'empty';
        if(currentPlayer && isBlockEmpty){
            dispatch(updateGameBoardArray(gridIndex,getCurrentPlayerGridNotation(currentPlayer)));
            const hasCurrentPlayerHaveNought = gameReducerState[currentPlayer].noughtOrCross === 'nought';
            if(hasCurrentPlayerHaveNought){
                dispatch(pushToNoughtSequence(gridIndex));
            }else{
                dispatch(pushToCrossSequence(gridIndex));
            }
            dispatch(updateCurrentPlayer(toggleCurrentPlayer()))
        }
    }
    
    return (
        <div onClick={handleClickGridBlock} className={`gridBlock ${blockType === 'empty' ? 'emptyGridBlock':''}`}>
            {blockType === 'cross' ? <Cross /> : null }
            {blockType === 'nought' ? <Nought /> : null}
        </div>
    )
}
