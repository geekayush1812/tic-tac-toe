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
import { Cross } from 'ui/Cross';
import { Nought } from 'ui/Nought';
import { playgroundGridNotation } from 'utils/constants';

const GameBoardGridBlock = ({blockType,gridIndex}:GameBoardGridBlockProps) => {
    const currentPlayer = useSelector(state=>state.playgroundReducer.currentPlayer)
    const gameReducerState = useSelector(state=>state.gameMenuReducer);
    const gameResult = useSelector(state=>state.appReducer.gameResult);
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
        const gameNotHasWinner = gameResult === undefined;
        if(currentPlayer && isBlockEmpty && gameNotHasWinner){
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
export default GameBoardGridBlock;
