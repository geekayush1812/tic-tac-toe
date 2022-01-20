import './playerSettings.css';

import {
  switchPlayerNoughtAndCrossChoice,
  updatePlayerOneName,
  updatePlayerTwoName,
} from 'store/actions/gameMenuAction';
import {
  useDispatch,
  useSelector,
} from 'store/hooks';
import { NoughtOrCross } from 'ui/NoughtOrCross';
import { SwitchNoughtAndCross } from 'ui/SwitchNoughtAndCross';
import { TextInput } from 'ui/TextInput';

const PlayerSettings = () => {
    const {
        name:playerOneName,
        noughtOrCross:playerOneNoughtOrCross
    }=useSelector(state=>state.gameMenuReducer.playerOne);
    const {
        name:playerTwoName,
        noughtOrCross:playerTwoNoughtOrCross
    }=useSelector(state=>state.gameMenuReducer.playerTwo);
    const dispatch=useDispatch();
    const handleChangePlayerOneName=(event:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(updatePlayerOneName(event.target.value));
    }
    const handleChangePlayerTwoName=(event:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(updatePlayerTwoName(event.target.value));
    }
    const handleSwitchNoughtAndCross = ()=>{
        dispatch(switchPlayerNoughtAndCrossChoice());
    }
    return (
        <div className='ps87playerSettingsContainer'>
            <NoughtOrCross className='ps87noughtOrCrossTop' type={playerOneNoughtOrCross} />
            <TextInput 
                className="ps87playerNameInputTop" 
                label='Player 1'
                value={playerOneName}
                onChange={handleChangePlayerOneName} />
            <SwitchNoughtAndCross className='ps45noughtAndCrossSwitch' onClick={handleSwitchNoughtAndCross} />
            <NoughtOrCross className='ps87noughtOrCrossBottom' type={playerTwoNoughtOrCross} />
            <TextInput 
                className="ps54playerNameInputBottom" 
                label='Player 2'
                value={playerTwoName}
                onChange={handleChangePlayerTwoName} />
        </div>
    )
}
export default PlayerSettings;
