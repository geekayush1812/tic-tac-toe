import './switchNoughtAndCross.css';

import {
  ReactComponent as ExchangeArrowIcon,
} from 'assets/svg/exchangeArrow.svg';
import { SwitchNoughtAndCrossProps } from 'types/uiTypes';

export const SwitchNoughtAndCross = ({className}:SwitchNoughtAndCrossProps) => {
    return (
        <div className={`exchangeArrowContainer ${className ? className : ''}`}>
            <ExchangeArrowIcon className='exchangeArrowIcon' />
        </div>
    )
}
