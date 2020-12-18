const initialState = {
	// Data List
  data: [],
  count: 0,
	page: 1,
	perPage: 20,
  totalPages: 0,
}

const MapReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'SET_LOADING':
			return {...state, loading: true}

    default:
      return state
  }
}

export default MapReducer
