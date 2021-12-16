import React from 'react';
import './style.scss';

const User = ({name, lastname, age, sex}) => {

	return (
		<div className='user'>
			<p>{name} {lastname}</p>
			<p>Возраст: {age}</p>
			<p>Пол: {sex === 'm' ? 'мужской' : 'женский'}</p>
		</div>
	);
}

export default User;