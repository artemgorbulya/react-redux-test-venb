import Input from '../Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../store/selectors';
import {updateFilteredUsers} from '../../store/actions';
import './style.scss';

const Form = () => {

	const users = useSelector(getUsers())
	const dispatch = useDispatch()

	let searchParams = {
		searchName: null,
		searchLastname: null,
		searchAge: null,
		maleSex: true,
		femaleSex: true
	};

	const filterUsers = (users, searchParams) => {

		const {searchName, searchLastname, searchAge, maleSex, femaleSex} = searchParams;
	
		const searchingSex=[];
			if (maleSex) {
				searchingSex.push('m');
			}
	
			if (femaleSex) {
				searchingSex.push('f');
			}
	
		const resultUsers = users.filter(user => {
			const {name, lastname, age, sex} = user;
			
			let nameRes = searchName ? (name.toLowerCase()).includes(searchName.toLowerCase()) : true;
			let lastnameRes = searchLastname ? (lastname.toLowerCase()).includes(searchLastname.toLowerCase()) : true;
			let ageRes = searchAge ? age === +searchAge : true;
			let sexRes = searchingSex && searchingSex.length > 0 ? searchingSex.some(el => el === sex) : false;
	
			return (nameRes && lastnameRes && ageRes && sexRes)	
		})
	
		return resultUsers;
	}

	const changeSearchParams = (event) => {

		switch (event.target.name) {
			case 'name':
				searchParams = {...searchParams, searchName: event.target.value}
				break
			case 'lastname':
				searchParams = {...searchParams, searchLastname: event.target.value}
				break
			case 'age':
				searchParams = {...searchParams, searchAge: event.target.value}
				break
			case 'sex-male':
				searchParams = {...searchParams, maleSex: !searchParams.maleSex}
				break
			case 'sex-female':
				searchParams = {...searchParams, femaleSex: !searchParams.femaleSex}
				break
			default:
				break
		}
		const filteredUsers = filterUsers(users, searchParams);
		dispatch(updateFilteredUsers(filteredUsers));
	}

	const handlerChange = (e) => {
		changeSearchParams(e)
	}

	return (
		<div className='filter-form'>
			<Input classname={'filter-input'} name={'name'} label={'Имя'} type={'text'}  onChange={handlerChange}/>
			<Input classname={'filter-input'} name={'lastname'} label={'Фамилия'} type={'text'} onChange={handlerChange}/>
			<Input classname={'filter-input'} name={'age'} label={'Возраст'} type={'number'} onChange={handlerChange}/>
			<div className='filter-sex'>
				<span>Пол:</span>
				<Input name={'sex-male'} label={'мужской'} type={'checkbox'} defaultChecked={true} onChange={handlerChange}/>
				<Input name={'sex-female'} label={'женский'} type={'checkbox'} defaultChecked={true} onChange={handlerChange}/>
			</div>
		</div>
	);
}

export default Form;