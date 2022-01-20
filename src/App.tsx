import './App.css';

import { useEffect } from 'react';

import { Header } from 'common/Header';
import { HeightBoundContainer } from 'common/HeightBoundContainer';
import { updateBreakPoint } from 'store/actions/breakPointsAction';
import { updateLeaderboard } from 'store/actions/leaderboardAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { selectedTab } from 'types/reducerTypes/appReducerTypes';
import { leaderboardUserDetails } from 'types/viewsTypes';
import {
  localStorageKeys,
  uiBreakPoints,
} from 'utils/constants';
import { UiBreakPoints } from 'utils/constants/uiBreakPoints';
import {
  findAndPushPlayerInLeaderboard,
  getLocalStorageValue,
  getNewLeaderboardUser,
  uiBreakPointObserver,
} from 'utils/helpers';
import { GameMenuWrapper } from 'views/GameMenu/GameMenu';
import { GameResult } from 'views/GameResult/GameResult';
import { Leaderboard } from 'views/Leaderboard/Leaderboard';
import { Playground } from 'views/Playground/Playground';

function App() {
  const {playing,showGameResult,gameResult,winnerNoughtAndCross} = useSelector(state=>state.appReducer);
  const {playerOne,playerTwo} = useSelector(state=>state.gameMenuReducer);
  const selectedTab = useSelector(state=>state.appReducer.selectedTab);
  const breakPoint = useSelector(state=>state.breakPointReducer.breakPoint);
  const hasGameHaveWinner = gameResult === "winner";
  const dispatch=useDispatch();
  useEffect(()=>{
    const setBreakPoint=(breakPoint:keyof UiBreakPoints)=>{
      dispatch(updateBreakPoint(breakPoint))
    }
    uiBreakPointObserver(uiBreakPoints,setBreakPoint);
  },[dispatch]);
  const checkTabForMobileView = (tab:selectedTab) => {
    const isDeskTopView = breakPoint === 'desktop';
    const isTabletView = breakPoint === 'tablet';
    const isMobileView = breakPoint === 'mobile';
    const isThisTabSelected = selectedTab === tab;
    
    return isDeskTopView || isTabletView || (isMobileView && isThisTabSelected);
  }
  const renderPlayground = () => {
    if(checkTabForMobileView("playground")){
      return <Playground className={`app87playgroundGrid`}/>;
    }
    return null;
  }
  const renderLeaderboard = () => {
    if(checkTabForMobileView("leaderboard")){
      return <Leaderboard className={`app56leaderboardGrid`} /> ;
    }
    return null;
  }
  useEffect(()=>{
    const hasWinnerAndNoughtOrCross = winnerNoughtAndCross && hasGameHaveWinner;
    if(hasWinnerAndNoughtOrCross){
        const [winnerPlayer,looserPlayer] = playerOne.noughtOrCross === winnerNoughtAndCross ? [playerOne,playerTwo] : [playerTwo,playerOne];
        const winnerPlayerDetails = getNewLeaderboardUser.winner(winnerPlayer);
        const looserPlayerDetails = getNewLeaderboardUser.looser(looserPlayer);
        
        const prestoredLeaderboard = getLocalStorageValue(localStorageKeys.leaderboard) as leaderboardUserDetails;
        const prestoredLeaderboardNotNull = prestoredLeaderboard !== null;
        
        if(prestoredLeaderboardNotNull){
          const newStoredLeaderboard:leaderboardUserDetails = [];
          const copyPrestoredLeaderboard=[...prestoredLeaderboard];
          findAndPushPlayerInLeaderboard({
            leaderboard:copyPrestoredLeaderboard,
            newLeaderboard:newStoredLeaderboard,
            result:"winner",
            player:winnerPlayer,
            newPlayerDetails:winnerPlayerDetails
          })
          findAndPushPlayerInLeaderboard({
            leaderboard:copyPrestoredLeaderboard,
            newLeaderboard:newStoredLeaderboard,
            result:"looser",
            player:looserPlayer,
            newPlayerDetails:looserPlayerDetails
          })
          dispatch(updateLeaderboard([...copyPrestoredLeaderboard,...newStoredLeaderboard]));
        }else{
          dispatch(updateLeaderboard([winnerPlayerDetails,looserPlayerDetails]));
        }
    }
  },[playerOne, playerTwo, winnerNoughtAndCross, dispatch, hasGameHaveWinner]);
  return (
    <div className='app34appContainer'>
      <Header />
      { 
        playing ? null : <GameMenuWrapper />
      }
      <HeightBoundContainer className={'app43heightBoundContainer app38playgroundLeaderboardGrid'}>
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
