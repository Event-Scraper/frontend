import { stanfordEventsSet } from '../../action/stanford-events-actions'

describe('testing stanfordEvents actions', () => {
	let mockState = [
		{
			userId: 'user',
			id: 12345
		}
	]

	test('stanfordEventsSet returns a STANFORD_EVENTS_SET action', () => {
		let action = stanfordEventsSet([
			{
				userId: 'user',
				id: 12345
			},
			{
				userId: 'user',
				id: 12345
			}
		])

		expect(action.type).toEqual('STANFORD_EVENTS_SET')
		expect(action.payload.length).toEqual(2)
	})
})
