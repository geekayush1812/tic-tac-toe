import './button.css';

import { ButtonProps } from 'types/uiTypes';

export const Button = ({text,className,onClick,disabled}:ButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`button ${className ? className : ''}`}>
            <span>{text}</span>
        </button>
    )
}
