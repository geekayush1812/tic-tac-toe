import './userCard.css';

import { ReactComponent as UserIcon } from 'assets/svg/userIcon.svg';
import { UserCardProps } from 'types/commonTypes';

const UserCard = ({user}:UserCardProps) => {
     return (
         <div className='uc87userCardContainer'>
             <UserIcon className='uc76userIcon' />
             <div className="uc98userDetailsContainer">
                 <span className='uc76userName'>{user.name}</span>
                 <div className="uc82winsAndLosses">
                     <div className="uc12winsContainer">
                        <span>Wins : </span>
                        <span>{user.wonMatches}</span>
                     </div>
                     <div className="uc81lossesContainer">
                         <span>Losses : </span>
                         <span>{user.lostMatches}</span>
                     </div>
                 </div>
             </div>
         </div>
     )
}
export default UserCard;
 