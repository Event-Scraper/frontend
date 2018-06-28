import superagent from 'superagent'

export const eventbriteEventsSet = events => ({
	type: 'EVENTBRITE_EVENTS_SET',
	payload: events
})

export const eventbriteEventsRequest = () => (dispatch, getState) => {
	return superagent
		.get(`${API_URL}/api/events/eventbrite/all`)
		.then(res => {
			dispatch(eventbriteEventsSet(res.body))
			return res.body
		})
		.catch(err => {
			console.log(err)
		})
}
