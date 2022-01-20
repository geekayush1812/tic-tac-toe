import './textInput.css';

import { TextInputProps } from 'types/uiTypes';

const TextInput = ({label,value,onChange,className}:TextInputProps) => {
    return (
        <div className={`ti54inputContainer ${className ? className :''}`}>
            <span>{label}</span>
            <input type="text" value={value} onChange={onChange} />
        </div>
    )
}
export default TextInput;