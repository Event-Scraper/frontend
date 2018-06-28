import meetUpReducer from '../../reducer/meetup-events'

describe('testing meetUp reducer', () => {
	let mockState = [
		{
			activityId: 1,
			id: 12345
		}
	]

	let action = {
		type: 'MEETUP_EVENTS_SET',
		payload: {
			activityId: 1,
			id: 12345
		}
	}

	test('inital state should be null', () => {
		let result = meetUpReducer(undefined, { type: null })
		expect(result).toEqual([])
	})

	test('if the action type isnt registerd it will return the state', () => {
		let result = meetUpReducer(mockState, { type: null })
		expect(result).toEqual(mockState)
	})

	test('MEETUP_EVENTS_SET should return payload', () => {
		let state = meetUpReducer([], action)
		expect(state).toBe(action.payload)
	})
})
