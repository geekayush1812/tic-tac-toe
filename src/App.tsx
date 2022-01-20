import './App.css';

import { useEffect } from 'react';

import { Header } from 'common/Header/Header';
import {
  HeightBoundContainer,
} from 'common/HeightBoundContainer/HeightBoundContainer';
import { updateBreakPoint } from 'store/actions/breakPointsAction';
import { updateLeaderboard } from 'store/actions/leaderboardAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { selectedTab } from 'types/reducerTypes/appReducerTypes';
import { leaderboardUserDetails } from 'types/viewsTypes';
import { localStorageKeys } from 'utils/constants/localstorageKeys';
import {
  uiBreakPoints,
  UiBreakPoints,
} from 'utils/constants/uiBreakPoints';
import {
  findAndPushPlayerInLeaderboard,
} from 'utils/helpers/findAndPushPlayerInLeaderboard';
import { getLocalStorageValue } from 'utils/helpers/getLocalStorageValue';
import { getNewLeaderboardUser } from 'utils/helpers/getNewLeaderboardUser';
import { uiBreakPointObserver } from 'utils/helpers/uiBreakPointObserver';
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
