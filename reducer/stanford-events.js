export default (state = [], action) => {
	let { type, payload } = action
	switch (type) {
		case 'STANFORD_EVENTS_SET':
			return payload
		default:
			return state
	}
}
