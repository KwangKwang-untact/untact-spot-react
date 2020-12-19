const initialState = {
	filter: {
		car: false,
		time: 0,
		theme: [],
	},

  data: [],
	count: 0,
	
	status: null,
}

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'SET_DATA_RECOMMEND':
			return {
				data: action.payload.data,
				count: action.payload.data.length,
				filter: action.payload.filter,
				status: 'finish',
			}
		case 'INIT_DATA_RECOMMEND':
			return {
				data: [],
				count: 0,
				status: 'request',
			}
			
		case 'SET_DATA_FILTER':
			return {...state, filter: action.payload}

		case 'REQUEST_DATA':
			return { status: 'reqeust' }

    default:
      return state
  }
}

export default DataReducer
