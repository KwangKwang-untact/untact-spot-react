import axios from 'axios'

export const SetLoading = () => {
	return dispatch => dispatch({ type: 'SET_LOADING' })
}

export const getData = params => {
  return async dispatch => {
    await axios.get('/url', { params }).then(response => {
      dispatch({ type: 'ACTION_TYPE', payload: response.data })
    })
  }
}
