import './switchNoughtAndCross.css';

import {
  ReactComponent as ExchangeArrowIcon,
} from 'assets/images/svg/exchangeArrow.svg';
import { SwitchNoughtAndCrossProps } from 'types/uiTypes';

const SwitchNoughtAndCross = ({className,onClick}:SwitchNoughtAndCrossProps) => {
    return (
        <div onClick={onClick} className={`snc64exchangeArrowContainer ${className ? className : ''}`}>
            <ExchangeArrowIcon className='snc82exchangeArrowIcon' />
        </div>
    )
}

export default SwitchNoughtAndCross;