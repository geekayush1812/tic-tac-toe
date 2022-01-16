import './App.css';

import { useEffect } from 'react';

import { Header } from 'common/header/Header';
import {
  UPDATE_UI_BREAK_POINT,
} from 'store/actionTypes/breakPointsActionTypes';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import {
  uiBreakPoints,
  UiBreakPoints,
} from 'utils/constants/uiBreakPoints';
import { uiBreakPointObserver } from 'utils/helpers/uiBreakPointObserver';

function App() {
  const breakPoint=useSelector((state)=>state.breakPointReducer.breakPoint);
  const dispatch=useDispatch();
  useEffect(()=>{
    const setBreakPoint=(breakPoint:keyof UiBreakPoints)=>{
      dispatch({
        type:UPDATE_UI_BREAK_POINT,
        payload:breakPoint
      })
    }
    uiBreakPointObserver(uiBreakPoints,setBreakPoint);
  },[dispatch])
  return (
    <div className='appContainer'>
      <Header />
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
