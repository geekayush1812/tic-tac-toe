import './header.css';

import { ReactComponent as SettingIcon } from 'assets/svg/settingIcon.svg';
import { setSelectedTab } from 'store/actions/appAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { selectedTab } from 'types/reducerTypes/appReducerTypes';

export const Header = () => {
    const breakPoint = useSelector(state=>state.breakPointReducer.breakPoint);
    const selectedTab = useSelector(state=>state.appReducer.selectedTab);
    const dispatch = useDispatch();
    const handleTabClick = (tab:selectedTab)=>{
        dispatch(setSelectedTab(tab));
    }
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
                        <li onClick={()=>handleTabClick("playground")} className={`${selectedTab==='playground'?'listActive':''}`}>Playground</li>
                        <li onClick={()=>handleTabClick("leaderboard")} className={`${selectedTab==='leaderboard'?'listActive':''}`}>Leaderboard</li>
                    </ul>
                : null
            }
        </nav>
    )
}