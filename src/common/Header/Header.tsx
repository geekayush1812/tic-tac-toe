import './header.css';

import { ReactComponent as SettingIcon } from 'assets/svg/settingIcon.svg';
import { useSelector } from 'store/hooks';

export const Header = () => {
    const breakPoint=useSelector(state=>state.breakPointReducer.breakPoint);
    return (
        <nav>
            <div className="headerWrapper">
                <h1>Tic Tac Toe</h1>
                {
                    breakPoint === 'mobile' ?
                        <SettingIcon className='settingIcon' />
                    : null
                }
            </div>
            {
                breakPoint === 'mobile' ?
                    <ul>
                        <li className='listActive'>Playground</li>
                        <li>Leaderboard</li>
                    </ul>
                : null
            }
        </nav>
    )
}
