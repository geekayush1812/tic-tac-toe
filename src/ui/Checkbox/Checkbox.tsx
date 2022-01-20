import './checkbox.css';

import { CheckboxProps } from 'types/uiTypes';

const Checkbox = ({checked,className,onChange}:CheckboxProps)=>{
    return (
        <label className={`cb87checkBoxLabel ${className ? className : ''}`} htmlFor='checkBox'>
            <input 
                id='checkBox'
                type={'checkbox'} 
                checked={checked}
                onChange={onChange}
                />
            <div className='cb83customCheckBox'></div>
        </label>
    )
}
export default Checkbox;