import { scrollTopCreate } from '../../action/scrollTop-actions.js'

describe('testing scrollTop actions', () => {
	let mockState = [
		{
			userId: 'user',
			id: 12345
		}
	]

	test('scrollTopCreate returns a SCROLLTOP_CREATE action', () => {
		let action = scrollTopCreate({
			userId: 'user',
			id: 12345
		})
		expect(action.type).toEqual('SCROLLTOP_CREATE')
		expect(action.payload.id).toBeTruthy()
		expect(action.payload.userId).toBe('user')
	})
})
