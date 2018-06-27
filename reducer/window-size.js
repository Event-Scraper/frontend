export default (state = { height: 0, width: 0 }, action) => {
	let { type, payload } = action

	switch (type) {
		case 'WINDOW_SIZE_CREATE':
			return payload
		default:
			return state
	}
}
