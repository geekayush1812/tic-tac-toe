import './App.css';

import { useEffect } from 'react';

import { Header } from 'common/Header/Header';
import {
  HeightBoundContainer,
} from 'common/HeightBoundContainer/HeightBoundContainer';
import { updateBreakPoint } from 'store/actions/breakPointsAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { selectedTab } from 'types/reducerTypes/appReducerTypes';
import {
  uiBreakPoints,
  UiBreakPoints,
} from 'utils/constants/uiBreakPoints';
import { uiBreakPointObserver } from 'utils/helpers/uiBreakPointObserver';
import { GameMenuWrapper } from 'views/GameMenu/GameMenu';
import { GameResult } from 'views/GameResult/GameResult';
import { Leaderboard } from 'views/Leaderboard/Leaderboard';
import { Playground } from 'views/Playground/Playground';

function App() {
  const {playing,showGameResult} = useSelector(state=>state.appReducer);
  const selectedTab = useSelector(state=>state.appReducer.selectedTab);
  const breakPoint = useSelector(state=>state.breakPointReducer.breakPoint);
  const dispatch=useDispatch();
  useEffect(()=>{
    const setBreakPoint=(breakPoint:keyof UiBreakPoints)=>{
      dispatch(updateBreakPoint(breakPoint))
    }
    uiBreakPointObserver(uiBreakPoints,setBreakPoint);
  },[dispatch]);
  const checkTabForMobileAndDesktopView = (tab:selectedTab) => {
    const isDeskTopView = breakPoint === 'desktop';
    const isMobileView = breakPoint === 'mobile';
    const isThisTabSelected = selectedTab === tab;
    
    return isDeskTopView || (isMobileView && isThisTabSelected);
  }
  const renderPlayground = () => {
    if(checkTabForMobileAndDesktopView("playground")){
      return <Playground className={`playgroundGrid`}/>;
    }
    return null;
  }
  const renderLeaderboard = () => {
    if(checkTabForMobileAndDesktopView("leaderboard")){
      return <Leaderboard className={`leaderboardGrid`} /> ;
    }
    return null;
  }
  return (
    <div className='appContainer'>
      <Header />
      { 
        playing ? null : <GameMenuWrapper />
      }
      <HeightBoundContainer className={'heightBoundContainer playgroundLeaderboardGrid'}>
        {renderPlayground()}
        {renderLeaderboard()}
      </HeightBoundContainer>
      {
        showGameResult ? <GameResult /> : null
      }
    </div>
  );
}

export default App;
