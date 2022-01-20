import './playground.css';

import { ActivePlayer } from 'common/ActivePlayer';
import { GameBoardGrid } from 'common/GameBoardGrid';
import { useSelector } from 'store/hooks';
import { playgroundProps } from 'types/viewsTypes';

export const Playground = ({className}:playgroundProps) => {
    const breakPoint=useSelector(state=>state.breakPointReducer.breakPoint);
    return (
        <section className={`pg74playground ${className ? className : ''}`}>
            {
                breakPoint === 'mobile' ? null : <h2>Playground</h2>
            }
            <div className="pg89playgroundGridContainer">
                <ActivePlayer />
                <GameBoardGrid />
            </div>
        </section>
    )
}
