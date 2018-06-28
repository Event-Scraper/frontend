import { allEventsSet } from '../../action/all-events-actions.js'

describe('testing all events actions', () => {
	let mockState = [
		{
			activityId: 1,
			id: 12345
		}
	]

	test('allEventsSet returns a ALL_EVENTS_SET action', () => {
		let action = allEventsSet({
			activityId: 1,
			id: 12345
		})
		expect(action.type).toEqual('ALL_EVENTS_SET')
		expect(action.payload.id).toBeTruthy()
		expect(action.payload.activityId).toBe(1)
	})
})
