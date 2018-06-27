import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { scrollTopCreate } from '../../../action/scrollTop-actions'

const Fragment = React.Fragment

class EventsDisplay extends React.Component {
	constructor(props) {
		super(props)

		this.state = { selectedArr: [] }
	}

	componentDidMount() {
		this.setState({ selectedArr: this.props.stanfordEvents })
	}

	render() {
		return (
			<Fragment>
				<div
					style={{ height: this.props.windowSize.height / 1.5 }}
					className="events-display__body"
				>
					<h1>HELLO</h1>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	windowSize: state.windowSize,
	stanfordEvents: state.stanfordEvents,
	meetupEvents: state.meetupEvents,
	eventbriteEvents: state.eventbriteEvents
})

const mapDispatchToProps = dispatch => ({
	scrollTopCreate: scroll => dispatch(scrollTopCreate(scroll))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventsDisplay)
