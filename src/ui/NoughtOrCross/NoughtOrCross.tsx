import './noughtOrCross.css';

import { NoughtOrCrossProps } from 'types/uiTypes';

const NoughtOrCross = ({type,className}:NoughtOrCrossProps) => {
    return (
        <div className={`noc68noughtOrCrossContainer ${className ? className : ''}`}>
            <span className='noc72noughtOrCrossText'>
                {type === 'nought' ? 'O' : 'X' }
            </span>
        </div>
    )
}
export default NoughtOrCross;
