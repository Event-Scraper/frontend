import eventbriteEventsReducer from '../../reducer/eventbrite-events'

describe('testing eventbriteEvents reducer', () => {
	let mockState = [
		{
			activityId: 1,
			id: 12345
		}
	]

	let action = {
		type: 'EVENTBRITE_EVENTS_SET',
		payload: [
			{
				activityId: 1,
				id: 12345
			}
		]
	}

	test('inital state should be null', () => {
		let result = eventbriteEventsReducer(undefined, { type: null })
		expect(result).toEqual([])
	})

	test('if the action type isnt registerd it will return the state', () => {
		let result = eventbriteEventsReducer(mockState, { type: null })
		expect(result).toEqual(mockState)
	})

	test('EVENTBRITE_EVENTS_SET should return payload', () => {
		let state = eventbriteEventsReducer({}, action)
		expect(state).toBe(action.payload)
	})
})
