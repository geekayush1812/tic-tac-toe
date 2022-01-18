import './leaderboard.css';

import { UserCard } from 'common/UserCard/UserCard';
import { leaderboardProps } from 'types/viewsTypes';

export const Leaderboard = ({className}:leaderboardProps) => {
    return (
        <section className={`leaderboard ${className ? className : ''}`}>
            <h2>Leaderboard</h2>
            <div className="userCardListContainer">
               <UserCard />
               <UserCard />
               <UserCard />
               <UserCard />
               <UserCard />
            </div>
        </section>
    )
}
 