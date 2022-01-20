import './playground.css';

import { ActivePlayer } from 'common/ActivePlayer/ActivePlayer';
import { GameBoardGrid } from 'common/GameBoardGrid/GameBoardGrid';
import { useSelector } from 'store/hooks';
import { playgroundProps } from 'types/viewsTypes';

export const Playground = ({className}:playgroundProps) => {
    const breakPoint=useSelector(state=>state.breakPointReducer.breakPoint);
    return (
        <section className={`playground ${className ? className : ''}`}>
            {
                breakPoint === 'mobile' ? null : <h2>Playground</h2>
            }
            <div className="playgroundGridContainer">
                <ActivePlayer />
                <GameBoardGrid />
            </div>
        </section>
    )
}
