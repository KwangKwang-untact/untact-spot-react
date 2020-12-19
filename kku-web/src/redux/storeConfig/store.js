import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import { composeWithDevTools } from 'redux-devtools-extension'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../reducers/rootReducer'

const persistConfig = {
	key: 'untact',
	storage,
}

const pReducer = persistReducer(persistConfig, rootReducer)
const middlewares = applyMiddleware(thunk, createDebounce())

const store = createStore(pReducer, composeWithDevTools(middlewares))
const persistor = persistStore(store)

export { persistor, store }
