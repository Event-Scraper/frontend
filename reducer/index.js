import { combineReducers } from 'redux'
import scrolltop from './scrolltop'
import windowSize from './window-size'
import stanfordEvents from './stanford-events'
import meetupEvents from './meetup-events'
import eventbriteEvents from './eventbrite-events'
import allEvents from './all-events'
import eventSourceMap from './event-source-map'

export default combineReducers({
	scrolltop: scrolltop,
	windowSize: windowSize,
	stanfordEvents: stanfordEvents,
	meetupEvents: meetupEvents,
	eventbriteEvents: eventbriteEvents,
	allEvents: allEvents,
	eventSourceMap: eventSourceMap
})
