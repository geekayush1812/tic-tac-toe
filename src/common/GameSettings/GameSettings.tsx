import './gameSettings.css';

import { updateGameSound } from 'store/actions/gameMenuAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { Checkbox } from 'ui/Checkbox/Checkbox';

export const GameSettings = () => {
    const {hasSound}=useSelector(state=>state.gameMenuReducer);
    const dispatch = useDispatch();
    const onGameSoundChange=()=>{
        dispatch(updateGameSound());
    }
    return (
        <div className="menuItem soundMenuItem">
            <h3>Sound</h3>
            <Checkbox 
                className='checkBox'
                checked={hasSound} 
                onChange={onGameSoundChange} />
        </div>
    )
}
