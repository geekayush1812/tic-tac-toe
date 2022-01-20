import './activePlayer.css';

import { useSelector } from 'store/hooks';

const ActivePlayer = () => {
    const {playerOne,playerTwo}=useSelector(state=>state.gameMenuReducer);
    const currentPlayer=useSelector(state=>state.playgroundReducer.currentPlayer);
    return (
        <div className="playerContainer">
            <div className={`player ${currentPlayer === 'playerOne' ? 'activePlayer' : ''}`}>
                <span className='crossOrNoughtChoice'>
                    {playerOne.noughtOrCross === 'nought' ? 'O' : 'X'}
                </span>
                <span className='playerName'>
                    {playerOne.name}
                </span>
            </div>
            <div className={`player ${currentPlayer === 'playerTwo' ? 'activePlayer' : ''}`}>
                <span className='crossOrNoughtChoice'>
                    {playerTwo.noughtOrCross === 'nought' ? 'O' : 'X'}
                </span>
                <span className='playerName'>
                    {playerTwo.name}
                </span>
            </div>
            <div className={`activePlayerIndicator ${currentPlayer==='playerTwo'?'moveExtreme':''}`} />
        </div>
    )
}
export default ActivePlayer;