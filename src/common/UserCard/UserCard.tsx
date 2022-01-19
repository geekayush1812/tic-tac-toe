import './userCard.css';

import { ReactComponent as UserIcon } from 'assets/svg/userIcon.svg';

export const UserCard = () => {
     return (
         <div className='userCardContainer'>
             <UserIcon className='userIcon' />
             <div className="userDetailsContainer">
                 <span className='userName'>Ayush</span>
                 <div className="winsAndLosses">
                     <div className="winsContainer">
                        <span>Wins : </span>
                        <span>4</span>
                     </div>
                     <div className="lossesContainer">
                         <span>Losses : </span>
                         <span>5</span>
                     </div>
                 </div>
             </div>
         </div>
     )
 }
 