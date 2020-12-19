const initialState = {
	lat: 37.619379,
	long: 127.058869,
	address: null,
	loading: false,
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'SET_POSITION':
			return {...state,
				address: action.payload.address,
				lat: action.payload.latitude,
				long: action.payload.longitude
			}

		case 'SET_LOADING':
			return {...state, loading: true}

    default:
      return state
  }
}

export default UserReducer
