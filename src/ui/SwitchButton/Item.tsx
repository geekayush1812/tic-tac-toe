import './item.css';

import { SwitchButtonItemProps } from 'types/uiTypes';

export const Item = ({children,item,onClick,selectedItem}:SwitchButtonItemProps) => {
    return (
        <li 
            onClick={()=>{onClick && onClick(item)}} 
            className={`switchButtonItem ${selectedItem === item ? 'active' : 'inactive' }`}>
                {children}
        </li>
    )
}
