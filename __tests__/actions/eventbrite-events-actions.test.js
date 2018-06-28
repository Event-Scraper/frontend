import { eventbriteEventsSet } from '../../action/eventbrite-events-actions'

test('eventbriteEventsSet returns a EVENTBRITE_EVENTS_SET action', () => {
	let action = eventbriteEventsSet([
		{
			userId: 'user',
			id: 12345
		},
		{
			userId: 'user',
			id: 12345
		}
	])

	expect(action.type).toEqual('EVENTBRITE_EVENTS_SET')
	expect(action.payload.length).toEqual(2)
})
