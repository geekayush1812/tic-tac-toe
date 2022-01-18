import './gameBoardGridBlock.css';

import { GameBoardGridBlockProps } from 'types/commonTypes';
import { Cross } from 'ui/Cross/Cross';
import { Nought } from 'ui/Nought/Nought';

export const GameBoardGridBlock = ({blockType}:GameBoardGridBlockProps) => {
    return (
        <div className={`gridBlock ${blockType === 'empty' ? 'emptyGridBlock':''}`}>
            {blockType === 'cross' ? <Cross /> : null }
            {blockType === 'nought' ? <Nought /> : null}
        </div>
    )
}
