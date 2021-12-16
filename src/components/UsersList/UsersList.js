import React from 'react';
import {useSelector} from 'react-redux';
import {getFilteredUsers, getLoadingStatus} from '../../store/selectors';
import User from '../User/User';
import './style.scss';

const UsersList = () => {

	const filteredUsers = useSelector(getFilteredUsers());
	const loadingStatus = useSelector(getLoadingStatus());

	const content = filteredUsers.map(el => {
		const {name, lastname, age, sex} = el;
		return (
			<User key={name+lastname} name={name} lastname={lastname} age={age} sex={sex}/>
			)
		})

	const loading = <div>Загрузка данных...</div>;	

	return (
		<div className='user-list'>
			{loadingStatus ? loading : content}
		</div>
	);
}

export default UsersList;