import axios from 'axios'

export const SetLoading = () => {
	return dispatch => dispatch({ type: 'SET_LOADING' })
}