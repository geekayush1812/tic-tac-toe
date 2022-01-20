import './noughtOrCross.css';

import { NoughtOrCrossProps } from 'types/uiTypes';

const NoughtOrCross = ({type,className}:NoughtOrCrossProps) => {
    return (
        <div className={`noughtOrCrossContainer ${className ? className : ''}`}>
            <span className='noughtOrCrossText'>
                {type === 'nought' ? 'O' : 'X' }
            </span>
        </div>
    )
}
export default NoughtOrCross;
