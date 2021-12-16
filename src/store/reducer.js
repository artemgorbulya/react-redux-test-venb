import {SET_LOADING_DATA, UPDATE_FILTERED_USERS, UPDATE_USERS} from './types';

const initialStore = {
	users: [],
	isLoading: true,
	filteredUsers: []
}

export const reducer = (state = initialStore, action) => {
	switch (action.type) {
		case UPDATE_USERS:
			return {...state, users: action.payload}
		case SET_LOADING_DATA:
			return {...state, isLoading: action.payload}
		case UPDATE_FILTERED_USERS:
			return {...state, filteredUsers: action.payload}
		default:
			return state;
	}
}