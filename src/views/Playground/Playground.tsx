import './playground.css';

import {
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { ActivePlayer } from 'common/ActivePlayer/ActivePlayer';
import { GameBoardGrid } from 'common/GameBoardGrid/GameBoardGrid';

export const Playground = () => {
    const playgroundElementRef = useRef<HTMLElement>(null);
    const [playgroundElementHeight,setPlaygroundElementHeight]=useState('0%');
    useLayoutEffect(()=>{
        const elementYposition=playgroundElementRef.current?.getBoundingClientRect().y
        setPlaygroundElementHeight(`calc(100% - ${elementYposition}px)`)
    },[])
    return (
        <section ref={playgroundElementRef} style={{height:playgroundElementHeight}} className="playground">
            <div className="playgroundGridContainer">
                <ActivePlayer />
                <GameBoardGrid />
            </div>
        </section>
    )
}
