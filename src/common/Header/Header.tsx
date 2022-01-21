import './header.css';

import {
  useEffect,
  useState,
} from 'react';

import {
  ReactComponent as SettingIcon,
} from 'assets/images/svg/settingIcon.svg';
import { GameSettings } from 'common/GameSettings';
import { setSelectedTab } from 'store/actions/appAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { selectedTab } from 'types/reducerTypes/appReducerTypes';

const Header = ({className}:{className?:string}) => {
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
        <nav className={className?className:''}>
            <div className="hdr87headerWrapper">
                <h1>Tic Tac Toe</h1>
                {
                    breakPoint === 'mobile' ?
                        <SettingIcon onClick={handleClickSettingIcon} className='hdr87settingIcon' />
                    : null
                }
            </div>
            <div className='hdr23gameSettingContainer'>
               {showSetting ? <GameSettings className='hdr12gameSetting'/> : null}
            </div>
            {
                breakPoint === 'mobile' ?
                    <ul>
                        <li onClick={()=>handleTabClick("playground")} className={`${selectedTab==='playground'?'hdr77listActive':''}`}>Playground</li>
                        <li onClick={()=>handleTabClick("leaderboard")} className={`${selectedTab==='leaderboard'?'hdr77listActive':''}`}>Leaderboard</li>
                    </ul>
                : null
            }
        </nav>
    )
};
export default Header;