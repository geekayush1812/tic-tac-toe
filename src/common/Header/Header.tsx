import './header.css';

import {
  useEffect,
  useState,
} from 'react';

import { ReactComponent as SettingIcon } from 'assets/svg/settingIcon.svg';
import { GameSettings } from 'common/GameSettings';
import { setSelectedTab } from 'store/actions/appAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { selectedTab } from 'types/reducerTypes/appReducerTypes';

const Header = () => {
    const breakPoint = useSelector(state=>state.breakPointReducer.breakPoint);
    const selectedTab = useSelector(state=>state.appReducer.selectedTab);
    const [showSetting,setShowSetting] = useState(breakPoint==='mobile'?false:true);
    const dispatch = useDispatch();
    useEffect(()=>{
        const isDesktopOrTablet = breakPoint==='desktop' || breakPoint==='tablet';
        if(isDesktopOrTablet){
            setShowSetting(true)
        }
        if(breakPoint==='mobile'){
            setShowSetting(false);
        }
    },[breakPoint])
    const handleTabClick = (tab:selectedTab)=>{
        dispatch(setSelectedTab(tab));
    }
    const handleClickSettingIcon = ()=>{
       setShowSetting(value=>!value);
    }
    return (
        <nav>
            <div className="headerWrapper">
                <h1>Tic Tac Toe</h1>
                {
                    breakPoint === 'mobile' ?
                        <SettingIcon onClick={handleClickSettingIcon} className='settingIcon' />
                    : null
                }
            </div>
            <div className='gameSettingContainer'>
               {showSetting ? <GameSettings className='gameSetting'/> : null}
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
};
export default Header;