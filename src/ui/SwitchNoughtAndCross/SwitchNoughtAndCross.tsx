import './switchNoughtAndCross.css';

import {
  ReactComponent as ExchangeArrowIcon,
} from 'assets/svg/exchangeArrow.svg';
import { SwitchNoughtAndCrossProps } from 'types/uiTypes';

const SwitchNoughtAndCross = ({className,onClick}:SwitchNoughtAndCrossProps) => {
    return (
        <div onClick={onClick} className={`exchangeArrowContainer ${className ? className : ''}`}>
            <ExchangeArrowIcon className='exchangeArrowIcon' />
        </div>
    )
}

export default SwitchNoughtAndCross;