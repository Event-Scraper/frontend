import { eventSourceMapSet } from '../../action/event-source-map-actions'

describe('testing eventSourceMapSet actions', () => {
	let mockState = [
		{
			userId: 1,
			id: 12345
		}
	]

	test('eventSourceMapSet returns a EVENT_SOURCE_MAP_SET action', () => {
		let action = eventSourceMapSet({
			activityId: 1,
			id: 12345
		})
		expect(action.type).toEqual('EVENT_SOURCE_MAP_SET')
		expect(action.payload.id).toBeTruthy()
		expect(action.payload.activityId).toBe(1)
	})
})
