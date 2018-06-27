export default (state = { scrollTop: 0 }, action) => {
	let { type, payload } = action

	switch (type) {
		case 'SCROLLTOP_CREATE':
			return payload
		default:
			return state
	}
}
