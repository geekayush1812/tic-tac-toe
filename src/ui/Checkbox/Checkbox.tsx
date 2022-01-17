import './checkbox.css';

import { CheckboxProps } from 'types/uiTypes';

export const Checkbox = ({checked,className,onChange}:CheckboxProps)=>{
    return (
        <label className={`checkBoxLabel ${className ? className : ''}`} htmlFor='checkBox'>
            <input 
                id='checkBox'
                type={'checkbox'} 
                checked={checked}
                onChange={onChange}
                />
            <div className='customCheckBox'></div>
        </label>
    )
}