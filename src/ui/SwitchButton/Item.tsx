import './item.css';

import { SwitchButtonItemProps } from 'types/uiTypes';

export const Item = ({children,dataIndex,onClick,selectedIndex}:SwitchButtonItemProps) => {
    return (
        <li 
            onClick={()=>{onClick && onClick(dataIndex)}} 
            className={`switchButtonItem ${selectedIndex === dataIndex ? 'active' : 'inactive' }`}>
                {children}
        </li>
    )
}
