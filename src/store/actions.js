import {SET_LOADING_DATA, UPDATE_FILTERED_USERS, UPDATE_USERS} from './types';

export const updateDataAction = (data) => ({type: UPDATE_USERS, payload: data});
export const setLoadingDataAction = (data) => ({type: SET_LOADING_DATA, payload: data});
export const updateFilteredUsers = (data) => ({type: UPDATE_FILTERED_USERS, payload: data});