import superagent from 'superagent'

export const meetupEventsSet = events => ({
	type: 'MEETUP_EVENTS_SET',
	payload: events
})

export const meetupEventsRequest = () => (dispatch, getState) => {
	return superagent
		.get(`${API_URL}/api/events/meetup/all`)
		.then(res => {
			dispatch(meetupEventsSet(res.body))
			return res.body
		})
		.catch(err => {
			console.log(err)
		})
}
