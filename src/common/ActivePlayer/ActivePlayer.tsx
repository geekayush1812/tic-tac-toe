import './activePlayer.css';

export const ActivePlayer = () => {
    return (
        <div className="playerContainer">
            <div className="player activePlayer">
                <span className='crossOrNoughtChoice'>X</span>
                <span className='playerName'>Player 1</span>
            </div>
            <div className="player">
                <span className='crossOrNoughtChoice'>O</span>
                <span className='playerName'>Player 2</span>
            </div>
            <div className="activePlayerIndicator" />
        </div>
    )
}
