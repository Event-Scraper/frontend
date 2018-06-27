let reporter = store => next => action => {
	console.log('--__ACTION__--', action)

	try {
		let result = next(action)
		console.log('%%%%%STATE%%%%%', store.getState())
		return result
	} catch (error) {
		error.action = action
		console.error('--__ERROR__--', error)
		return error
	}
}

export default reporter
