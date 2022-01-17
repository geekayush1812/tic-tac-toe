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

function App() {
  const breakPoint=useSelector((state)=>state.breakPointReducer.breakPoint);
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
      <section className='leaderboard'>
        {breakPoint==='mobile'?<h2>Mobile</h2>:null}
        {breakPoint==='tablet'?<h2>Tablet</h2>:null}
        {breakPoint==='desktop'?<h2>Desktop</h2>:null}
      </section>
      <section className="playground"></section>
    </div>
  );
}

export default App;
