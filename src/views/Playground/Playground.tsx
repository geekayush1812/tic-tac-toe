import './playground.css';

import { useRef } from 'react';

import { ActivePlayer } from 'common/ActivePlayer/ActivePlayer';
import { GameBoardGrid } from 'common/GameBoardGrid/GameBoardGrid';
import { useClientHeight } from 'hooks/useClientHeight';

export const Playground = () => {
    const playgroundElementRef = useRef<HTMLElement>(null);
    const playgroundElementHeight=useClientHeight(playgroundElementRef,'0%');
    return (
        <section ref={playgroundElementRef} style={{height:playgroundElementHeight}} className="playground">
            <div className="playgroundGridContainer">
                <ActivePlayer />
                <GameBoardGrid />
            </div>
        </section>
    )
}
