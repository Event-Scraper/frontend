import windowSizeReducer from '../../reducer/window-size.js'

describe('testing windowSize reducer', () => {
	let mockState = [
		{
			activityId: 1,
			id: 12345
		}
	]

	let action = {
		type: 'WINDOW_SIZE_CREATE',
		payload: {
			activityId: 1,
			id: 12345
		}
	}

	test('inital state should be null', () => {
		let result = windowSizeReducer(undefined, { type: null })
		expect(result).toEqual({ height: 0, width: 0 })
	})

	test('if the action type isnt registerd it will return the state', () => {
		let result = windowSizeReducer(mockState, { type: null })
		expect(result).toEqual(mockState)
	})

	test('WINDOW_SIZE_CREATE should return payload', () => {
		let state = windowSizeReducer({}, action)
		expect(state).toBe(action.payload)
	})
})
