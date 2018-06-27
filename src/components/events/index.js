import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { scrollTopCreate } from '../../../action/scrollTop-actions'
import EventsDisplay from '../events-display'

class Events extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}
	componentDidMount() {
		this.props.setWindowSize()
		setTimeout(() => {
			this.setOffsetTop()
		}, 500)
		window.addEventListener('resize', this.setOffsetTop)
	}

	setOffsetTop = () => {
		let obj = { ...this.props.scrolltop }
		obj.eventsOffsetTop = this.refs.events.offsetTop - 64
		this.props.scrollTopCreate(obj)
	}

	render() {
		return (
			<div ref="events" className="events">
				<div
					style={{ minHeight: this.props.windowSize.height }}
					className="events__content"
				>
					<div className="events__content__header">
						<h1 className="events__content__header__title">Upcoming Events</h1>
					</div>
					<EventsDisplay />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	scrolltop: state.scrolltop,
	windowSize: state.windowSize
})

const mapDispatchToProps = dispatch => ({
	scrollTopCreate: scroll => dispatch(scrollTopCreate(scroll))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Events)
