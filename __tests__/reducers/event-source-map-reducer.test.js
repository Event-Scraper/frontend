import eventSourceMapReducer from '../../reducer/event-source-map.js'

describe('testing active eventSourceMap reducer', () => {
	let mockState = [
		{
			activityId: 1,
			id: 12345
		}
	]

	let action = {
		type: 'EVENT_SOURCE_MAP_SET',
		payload: {
			activityId: 1,
			id: 12345
		}
	}

	test('inital state should be null', () => {
		let result = eventSourceMapReducer(undefined, { type: null })
		expect(result).toEqual({})
	})

	test('if the action type isnt registerd it will return the state', () => {
		let result = eventSourceMapReducer(mockState, { type: null })
		expect(result).toEqual(mockState)
	})

	test('EVENT_SOURCE_MAP_SET should return payload', () => {
		let state = eventSourceMapReducer({}, action)
		expect(state).toBe(action.payload)
	})
})
