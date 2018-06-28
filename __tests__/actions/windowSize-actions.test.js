import { windowSizeCreate } from '../../action/windowSize-actions'

describe('testing windowSize actions', () => {
	let mockState = [
		{
			userId: 'user',
			id: 12345
		}
	]

	test('windowSizeCreate returns a WINDOW_SIZE_CREATE action', () => {
		let action = windowSizeCreate({
			userId: 'user',
			id: 12345
		})
		expect(action.type).toEqual('WINDOW_SIZE_CREATE')
		expect(action.payload.id).toBeTruthy()
		expect(action.payload.userId).toBe('user')
	})
})
