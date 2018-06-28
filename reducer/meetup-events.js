export default (state = [], action) => {
	let { type, payload } = action
	switch (type) {
		case 'MEETUP_EVENTS_SET':
			return payload
		default:
			return state
	}
}
