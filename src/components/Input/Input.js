import React from 'react';

const Input = ({name, label, type, onChange, defaultChecked, classname}) => {
	
	return (
		<>
			<label>
				{label} :
				<input className={classname} name={name} type={type} onChange={onChange} defaultChecked={defaultChecked}/>
			</label>
		</>
	);
}

export default Input;