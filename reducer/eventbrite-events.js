export default (state = [], action) => {
	let { type, payload } = action
	switch (type) {
		case 'EVENTBRITE_EVENTS_SET':
			return payload
		default:
			return state
	}
}
