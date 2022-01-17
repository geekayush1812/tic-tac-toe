import './gameSettings.css';

import {
  updateGameSound,
  updateGameView,
} from 'store/actions/gameMenuAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { gameView } from 'types/reducerTypes/gameMenuReducerTypes';
import { Checkbox } from 'ui/Checkbox/Checkbox';
import { SwitchButton } from 'ui/SwitchButton/SwitchButton';

export const GameSettings = () => {
    const {gameView,hasSound}=useSelector(state=>state.gameMenuReducer);
    const dispatch = useDispatch();
    const onGameViewChange=(item:gameView)=>{
        dispatch(updateGameView(item))
    }
    const onGameSoundChange=()=>{
        dispatch(updateGameSound());
    }
    return (
        <>
            <div className="menuItem">
                <h3>Game View</h3>
                <div className="gameViewContainer">
                    <SwitchButton 
                        selectedItem={gameView}
                        onClickItem={onGameViewChange} 
                        dataItems={['Standard','Inverted']} />
                </div>
            </div>
            <div className="menuItem soundMenuItem">
                <h3>Sound</h3>
                <Checkbox 
                    className='checkBox'
                    checked={hasSound} 
                    onChange={onGameSoundChange} />
            </div>
        </>
    )
}
