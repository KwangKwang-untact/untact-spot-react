import axios from 'axios'

export const SetLoading = () => {
	return dispatch => dispatch({ type: 'SET_LOADING' })
}

export const getGeometry = params => {
  return async dispatch => {
    axios.get('/geometry', { params }).then(response => {
      dispatch({ type: 'SET_POSITION', payload: { address: response.data, ...params } })
    })
  }
}
