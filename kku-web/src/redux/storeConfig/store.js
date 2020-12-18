import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../reducers/rootReducer'

const middlewares = applyMiddleware(thunk, createDebounce())
const store = createStore(rootReducer, composeWithDevTools(middlewares))

export { store }
