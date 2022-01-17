import './textInput.css';

export const TextInput = ({label,value,onChange,className}:{label:string;value?:string;onChange?:()=>void;className:string}) => {
    return (
        <div className={`inputContainer ${className ? className :''}`}>
            <span>{label}</span>
            <input type="text" value={value} onChange={onChange} />
        </div>
    )
}
