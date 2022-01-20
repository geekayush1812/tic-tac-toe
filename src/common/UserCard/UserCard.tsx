import './userCard.css';

import { ReactComponent as UserIcon } from 'assets/svg/userIcon.svg';
import { UserCardProps } from 'types/commonTypes';

const UserCard = ({user}:UserCardProps) => {
     return (
         <div className='userCardContainer'>
             <UserIcon className='userIcon' />
             <div className="userDetailsContainer">
                 <span className='userName'>{user.name}</span>
                 <div className="winsAndLosses">
                     <div className="winsContainer">
                        <span>Wins : </span>
                        <span>{user.wonMatches}</span>
                     </div>
                     <div className="lossesContainer">
                         <span>Losses : </span>
                         <span>{user.lostMatches}</span>
                     </div>
                 </div>
             </div>
         </div>
     )
}
export default UserCard;
 