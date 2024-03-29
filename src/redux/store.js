import {createStore, applyMiddleware, compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {reducer} from './reducers'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
