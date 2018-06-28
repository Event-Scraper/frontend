import allEventsReducer from '../../reducer/all-events.js'

describe('testing all events reducer', () => {
	let mockState = [
		{
			activityId: 1,
			alt: 12345
		}
	]

	let action = {
		type: 'ALL_EVENTS_SET',
		payload: {
			activityId: 1,
			alt: 12345
		}
	}

	test('inital state should be an empty object', () => {
		let result = allEventsReducer(undefined, { type: null })
		expect(result).toEqual([])
	})

	test('if the action type isnt registerd it will return the state', () => {
		let result = allEventsReducer(mockState, { type: null })
		expect(result).toEqual(mockState)
	})
})
