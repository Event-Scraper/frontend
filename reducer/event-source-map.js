export default (state = {}, action) => {
	let { type, payload } = action
	switch (type) {
		case 'EVENT_SOURCE_MAP_SET':
			return payload
		default:
			return state
	}
}
