import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { root } from './reducers/root'
import thunk from 'redux-thunk'

export const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)))
