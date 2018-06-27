import superagent from 'superagent'

export const stanfordEventsSet = events => ({
	type: 'STANFORD_EVENTS_SET',
	payload: events
})

export const stanfordEventsRequest = () => (dispatch, getState) => {
	return superagent
		.get(`${API_URL}/api/events/stanford/all`)
		.then(res => {
			dispatch(stanfordEventsSet(res.body))
			return res.body
		})
		.catch(err => {
			console.log(err)
		})
}
