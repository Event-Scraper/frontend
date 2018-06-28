import stanfordEventsReducer from '../../reducer/stanford-events'

describe('testing stanfordEvents reducer', () => {
	let mockState = [
		{
			activityId: 1,
			id: 12345
		}
	]

	let action = {
		type: 'STANFORD_EVENTS_SET',
		payload: {
			activityId: 1,
			id: 12345
		}
	}

	test('inital state should be null', () => {
		let result = stanfordEventsReducer(undefined, { type: null })
		expect(result).toEqual([])
	})

	test('if the action type isnt registerd it will return the state', () => {
		let result = stanfordEventsReducer(mockState, { type: null })
		expect(result).toEqual(mockState)
	})

	test('STANFORD_EVENTS_SET should return payload', () => {
		let state = stanfordEventsReducer([], action)
		expect(state).toBe(action.payload)
	})
})
