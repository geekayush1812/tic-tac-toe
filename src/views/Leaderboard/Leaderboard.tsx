import './leaderboard.css';

import { useEffect } from 'react';

import { UserCard } from 'common/UserCard';
import { updateLeaderboard } from 'store/actions/leaderboardAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import {
  leaderboardProps,
  leaderboardUser,
  leaderboardUserDetails,
} from 'types/viewsTypes';
import { EmptyLeaderboard } from 'ui/EmptyLeaderboard';
import { localStorageKeys } from 'utils/constants';
import { getLocalStorageValue } from 'utils/helpers';

export const Leaderboard = ({className}:leaderboardProps) => {
    const leaderboard = useSelector(state=>state.leaderboardReducer.leaderboard);
    const dispatch = useDispatch();
    useEffect(()=>{
        const prestoredLeaderboard = getLocalStorageValue(localStorageKeys.leaderboard) as leaderboardUserDetails;
        const hasPrestoredValue = prestoredLeaderboard !== null;
        if(hasPrestoredValue){
            dispatch(updateLeaderboard(prestoredLeaderboard));
        }
    },[dispatch]);
    const renderLeaderboard = (leaderboardUser:leaderboardUser[]) => {
        return leaderboardUser.map((player,index)=>{
            return <UserCard key={index} user={player} />
        })
    }
    const isLeaderboardNotNull = leaderboard !== null;
    const isLeaderboardNotEmpty = isLeaderboardNotNull && leaderboard.length !== 0;
    return (
        <section className={`lb38leaderboard ${className ? className : ''}`}>
            <h2>Leaderboard</h2>
            <div className="lb28userCardListContainer">
                {
                    isLeaderboardNotNull && isLeaderboardNotEmpty ? renderLeaderboard(leaderboard) : <EmptyLeaderboard />
                }
            </div>
        </section>
    )
}
 