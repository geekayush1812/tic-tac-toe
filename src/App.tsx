import './App.css';

import { useEffect } from 'react';

import { Header } from 'common/Header/Header';
import { updateBreakPoint } from 'store/actions/breakPointsAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import {
  uiBreakPoints,
  UiBreakPoints,
} from 'utils/constants/uiBreakPoints';
import { uiBreakPointObserver } from 'utils/helpers/uiBreakPointObserver';
import { GameMenuWrapper } from 'views/GameMenu/GameMenu';
import { Leaderboard } from 'views/Leaderboard/Leaderboard';
import { Playground } from 'views/Playground/Playground';

function App() {
  const playing = useSelector(state=>state.gameMenuReducer.playing);
  const dispatch=useDispatch();
  useEffect(()=>{
    const setBreakPoint=(breakPoint:keyof UiBreakPoints)=>{
      dispatch(updateBreakPoint(breakPoint))
    }
    uiBreakPointObserver(uiBreakPoints,setBreakPoint);
  },[dispatch])
  return (
    <div className='appContainer'>
      <Header />
      { 
        playing ? null : <GameMenuWrapper />
      }
      <Playground />
      <Leaderboard />
    </div>
  );
}

export default App;
