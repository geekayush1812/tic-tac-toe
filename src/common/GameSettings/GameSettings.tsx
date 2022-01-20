import './gameSettings.css';

import { updateGameSound } from 'store/actions/gameMenuAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { GameSettingsProps } from 'types/commonTypes';
import { Checkbox } from 'ui/Checkbox';

const GameSettings = ({className}:GameSettingsProps) => {
    const {hasSound}=useSelector(state=>state.gameMenuReducer);
    const dispatch = useDispatch();
    const onGameSoundChange=()=>{
        dispatch(updateGameSound());
    }
    return (
        <div className={`gs56menuItem gs45soundMenuItem ${className ? className : ''}`}>
            <h3>Sound</h3>
            <Checkbox 
                className='gs87checkBox'
                checked={hasSound} 
                onChange={onGameSoundChange} />
        </div>
    )
}
export default GameSettings;