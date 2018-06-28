import { meetupEventsSet } from '../../action/meetup-events-actions.js'

describe('testing meetupEventsSet actions', () => {
	let mockState = [
		{
			userId: 1,
			id: 12345
		}
	]

	test('meetupEventsSet returns a MEETUP_EVENTS_SET action', () => {
		let action = meetupEventsSet([
			{
				userId: 'user',
				id: 12345
			},
			{
				userId: 'user',
				id: 12345
			}
		])

		expect(action.type).toEqual('MEETUP_EVENTS_SET')
		expect(action.payload.length).toEqual(2)
	})
})
