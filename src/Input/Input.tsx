import React from 'react';

interface IInputProps {
	type?: React.HTMLInputTypeAttribute
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	title?: string
	placeholder?: string
	disabled?: boolean
	error?: boolean
	errorMessage?: string
	value: string
}

const Input = ({type, onChange, title, placeholder, disabled, error, errorMessage, value,}: IInputProps) => {
	return (
		<div className="input-group">
			{title && (<label>{title}</label>)}
			<input className={`input input-default`} type={type || 'text'} value={value} placeholder={placeholder} disabled={disabled} onChange={onChange}/>
			{errorMessage && <span>{errorMessage}</span>}
		</div>
	);
};

export default Input;