import './textInput.css';

import { TextInputProps } from 'types/uiTypes';

export const TextInput = ({label,value,onChange,className}:TextInputProps) => {
    return (
        <div className={`inputContainer ${className ? className :''}`}>
            <span>{label}</span>
            <input type="text" value={value} onChange={onChange} />
        </div>
    )
}
