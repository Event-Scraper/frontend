import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import reporter from './redux-reporter.js'
import thunk from './redux-thunk.js'

export default () => createStore(reducer, applyMiddleware(thunk, reporter))
