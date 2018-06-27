import { combineReducers } from 'redux'
import scrolltop from './scrolltop'
import windowSize from './window-size'
import stanfordEvents from './stanford-events'

export default combineReducers({
	scrolltop: scrolltop,
	windowSize: windowSize,
	stanfordEvents: stanfordEvents
})
