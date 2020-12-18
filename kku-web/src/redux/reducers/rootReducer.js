import { combineReducers } from 'redux'

import user from './user'
import map from './map'
import data from './data'

const rootReducer = combineReducers({
  user, map, data
})

export default rootReducer
