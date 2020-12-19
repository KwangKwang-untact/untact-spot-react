import axios from 'axios'

export const getRecommend = params => {
  return async dispatch => {
		dispatch({ type: 'INIT_DATA_RECOMMEND' })
    axios.get('/recommend', { params }).then(response => {
      dispatch({ type: 'SET_DATA_RECOMMEND', payload: { data: response.data, filter: params } })
    })
  }
}

export const setFilter = params => {
	return dispatch => dispatch({ type: 'SET_DATA_FILTER', payload: params })
}