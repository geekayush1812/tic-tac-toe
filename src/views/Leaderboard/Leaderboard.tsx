import './leaderboard.css';

import { useRef } from 'react';

import { useClientHeight } from 'hooks/useClientHeight';

export const Leaderboard = () => {
    const leaderboardElementRef=useRef<HTMLElement>(null);
    const leaderboardElementHeight=useClientHeight(leaderboardElementRef,'0%');

    return (
        <section ref={leaderboardElementRef}  style={{height:leaderboardElementHeight}} className='leaderboard'>

        </section>
    )
}
 