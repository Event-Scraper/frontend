import scrollTopReducer from '../../reducer/scrolltop.js'

describe('testing scrollTop reducer', () => {
	let mockState = [
		{
			activityId: 1,
			id: 12345
		}
	]

	let action = {
		type: 'SCROLLTOP_CREATE',
		payload: {
			activityId: 1,
			id: 12345
		}
	}

	test('inital state should be "scrollTop": 0,', () => {
		let result = scrollTopReducer(undefined, { type: null })
		expect(result).toEqual({ scrollTop: 0 })
	})

	test('if the action type isnt registerd it will return the state', () => {
		let result = scrollTopReducer(mockState, { type: null })
		expect(result).toEqual(mockState)
	})

	test('SCROLLTOP_CREATE should return payload', () => {
		let state = scrollTopReducer({}, action)
		expect(state).toBe(action.payload)
	})
})
