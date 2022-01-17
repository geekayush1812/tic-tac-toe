import './playerSettings.css';

import { NoughtOrCross } from 'ui/NoughtOrCross/NoughtOrCross';
import {
  SwitchNoughtAndCross,
} from 'ui/SwitchNoughtAndCross/SwitchNoughtAndCross';
import { TextInput } from 'ui/TextInput/TextInput';

export const PlayerSettings = () => {
    return (
        <div className='playerSettingsContainer'>
            <NoughtOrCross className='noughtOrCrossTop' type='nought' />
            <TextInput className="playerNameInputTop" label='Player 1' />
            <SwitchNoughtAndCross className='noughtAndCrossSwitch' />
            <NoughtOrCross className='noughtOrCrossBottom' type='cross' />
            <TextInput className="playerNameInputBottom" label='Player 2' />
        </div>
    )
}
