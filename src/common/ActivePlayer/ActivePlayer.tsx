import './activePlayer.css';

import { useSelector } from 'store/hooks';

const ActivePlayer = () => {
    const {playerOne,playerTwo}=useSelector(state=>state.gameMenuReducer);
    const currentPlayer=useSelector(state=>state.playgroundReducer.currentPlayer);
    return (
        <div className="ap87playerContainer">
            <div className={`ap45player ${currentPlayer === 'playerOne' ? 'ap24activePlayer' : ''}`}>
                <span className='ap87crossOrNoughtChoice'>
                    {playerOne.noughtOrCross === 'nought' ? 'O' : 'X'}
                </span>
                <span className='ap56playerName'>
                    {playerOne.name}
                </span>
            </div>
            <div className={`ap45player ${currentPlayer === 'playerTwo' ? 'ap24activePlayer' : ''}`}>
                <span className='ap87crossOrNoughtChoice'>
                    {playerTwo.noughtOrCross === 'nought' ? 'O' : 'X'}
                </span>
                <span className='ap56playerName'>
                    {playerTwo.name}
                </span>
            </div>
            <div className={`ap45activePlayerIndicator ${currentPlayer==='playerTwo'?'ap96moveExtreme':''}`} />
        </div>
    )
}
export default ActivePlayer;