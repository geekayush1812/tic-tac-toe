import './backdrop.css';

import { BackdropProps } from 'types/commonTypes';

const Backdrop = ({children,className}:BackdropProps) => {
    return (
        <div className={`bd65backdrop ${className ? className :'' }`}>
            {children}
        </div>
    )
}
export default Backdrop;
