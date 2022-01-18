import './playground.css';

import { ActivePlayer } from 'common/ActivePlayer/ActivePlayer';
import { GameBoardGrid } from 'common/GameBoardGrid/GameBoardGrid';
import { playgroundProps } from 'types/viewsTypes';

export const Playground = ({className}:playgroundProps) => {
    return (
        <section className={`playground ${className ? className : ''}`}>
            <div className="playgroundGridContainer">
                <ActivePlayer />
                <GameBoardGrid />
            </div>
        </section>
    )
}
