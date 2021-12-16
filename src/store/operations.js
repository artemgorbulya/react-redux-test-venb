import {setLoadingDataAction, updateDataAction,	updateFilteredUsers} from './actions';

export const getAllUsers = () => (dispatch) => {
	dispatch(setLoadingDataAction(true))
	fetch("https://venbest-test.herokuapp.com")
	.then(resp => resp.json())
	.then(resp => {
			dispatch(updateDataAction(resp))
			dispatch(updateFilteredUsers(resp))
			dispatch(setLoadingDataAction(false))
			})
	.catch(err => console.log(err))	
}