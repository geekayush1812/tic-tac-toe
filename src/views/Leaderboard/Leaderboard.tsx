import './leaderboard.css';

import { UserCard } from 'common/UserCard/UserCard';
import { useLocalStorage } from 'hooks/useLocalStorage';
import {
  leaderboardProps,
  leaderboardUserDetails,
} from 'types/viewsTypes';

export const Leaderboard = ({className}:leaderboardProps) => {
    const [storedLeaderboardItems,setStoredLeaderboardItems]=useLocalStorage<leaderboardUserDetails>("leaderboard");
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
 