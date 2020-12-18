const initialState = {
	x: null,
	y: null,
	loading: false,
	info: {},
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'SET_LOADING':
			return {...state, loading: true}

    default:
      return state
  }
}

export default UserReducer
