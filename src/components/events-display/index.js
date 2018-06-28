import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { scrollTopCreate } from '../../../action/scrollTop-actions'
import { eventSourceMapSet } from '../../../action/event-source-map-actions'
import EventItem from '../event-item'

const Fragment = React.Fragment

class EventsDisplay extends React.Component {
	constructor(props) {
		super(props)

		this.state = { selectedArr: [] }
	}

	componentDidMount() {
		this.setState({ selectedArr: this.props.stanfordEvents })
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ selectedArr: this.props.stanfordEvents })
	}

	handleEventDisplay = source => {
		if (this.props.eventSourceMap[source] === true) {
			let obj = { ...this.props.eventSourceMap }
			obj[source] = false
			this.props.eventSourceMap(obj)
		}
	}

	render() {
		return (
			<Fragment>
				<div
					style={{ height: this.props.windowSize.height / 1.5 }}
					className="events-display__body"
				>
					{this.state.selectedArr.map((event, idx) => {
						return <EventItem key={idx} event={event} />
					})}
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	windowSize: state.windowSize,
	stanfordEvents: state.stanfordEvents,
	meetupEvents: state.meetupEvents,
	eventbriteEvents: state.eventbriteEvents,
	eventSourceMap: state.eventSourceMap
})

const mapDispatchToProps = dispatch => ({
	scrollTopCreate: scroll => dispatch(scrollTopCreate(scroll)),
	eventSourceMapSet: map => dispatch(eventSourceMapSet(map))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventsDisplay)
