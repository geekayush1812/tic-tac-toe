import './backdrop.css';

import { BackdropProps } from 'types/commonTypes';

export const Backdrop = ({children,className}:BackdropProps) => {
    return (
        <div className={`backdrop ${className ? className :'' }`}>
            {children}
        </div>
    )
}
