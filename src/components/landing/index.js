import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBarCustom from '../app-bar-custom'
import { scrollTopCreate } from '../../../action/scrollTop-actions'
import { windowSizeCreate } from '../../../action/windowSize-actions'
import { stanfordEventsRequest } from '../../../action/stanford-events-actions'
import { meetupEventsRequest } from '../../../action/meetup-events-actions'
import { eventbriteEventsRequest } from '../../../action/eventbrite-events-actions'
import { allEventsSet } from '../../../action/all-events-actions'
import { eventSourceMapSet } from '../../../action/event-source-map-actions'
import Body from '../body'
import debounce from 'debounce'

class Landing extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.setWindowSize = debounce(this.setWindowSize, 500)
	}
	componentDidMount() {
		this.props.scrollTopCreate({ scrollTop: 1 })
		this.setScroll()
		window.addEventListener('resize', this.setWindowSize)
		this.props.stanfordEventsRequest().then(() => {
			let obj = { ...this.props.eventSourceMap }
			this.props.stanfordEvents.map(event => {
				if (!obj[event.source]) {
					obj[event.source] = false
					this.props.eventSourceMapSet(obj)
				}
			})
			this.props.eventbriteEventsRequest().then(() => {
				let obj = { ...this.props.eventSourceMap }
				this.props.eventbriteEvents.map(event => {
					if (!obj[event.source]) {
						obj[event.source] = false
						this.props.eventSourceMapSet(obj)
					}
				})
				this.props.meetupEventsRequest().then(() => {
					let obj = { ...this.props.eventSourceMap }
					this.props.meetupEvents.map(event => {
						if (!obj[event.source]) {
							obj[event.source] = false
							this.props.eventSourceMapSet(obj)
						}
					})
					let obj2 = this.props.eventbriteEvents.concat(
						this.props.meetupEvents,
						this.props.stanfordEvents
					)
					this.props.allEventsSet(obj2)
				})
			})
		})
	}
	setScroll = () => {
		if (this.refs.landing.scrollTop === 0) {
			this.refs.landing.scrollTop = 0.5
		}
		let obj = { ...this.props.scrolltop }
		obj.scrollTop = this.refs.landing.scrollTop * 2
		this.props.scrollTopCreate(obj)
	}
	setWindowSize = () => {
		let windowSize = { height: window.innerHeight, width: window.innerWidth }
		this.props.windowSizeCreate(windowSize)
	}

	handleNav = (to, duration) => {
		if (duration === 0) return
		var difference = to - this.refs.landing.scrollTop
		var perTick = (difference / duration) * 10

		setTimeout(() => {
			this.refs.landing.scrollTop = this.refs.landing.scrollTop + perTick
			this.handleNav(to, duration - 10)
		}, 10)
	}

	render() {
		const opacity =
			Math.min(100 / this.props.scrolltop.scrollTop, 1) === 1.0
				? Math.min(100 / this.props.scrolltop.scrollTop, 1).toFixed(2)
				: Math.min(100 / this.props.scrolltop.scrollTop, 1).toFixed(2) - 0.1
		const opaque = Math.min(this.props.scrolltop.scrollTop / 400, 1)
		return (
			<main
				onScroll={() => {
					this.setScroll()
				}}
				ref="landing"
				className="landing"
				style={{ backgroundImage: `url(${this.state.imgUrl})` }}
			>
				<AppBarCustom
					handleNav={this.handleNav}
					opaque={opaque}
					title="James Billard"
				/>
				<Body
					handleNav={this.handleNav}
					opacity={opacity}
					setWindowSize={this.setWindowSize}
				/>
			</main>
		)
	}
}

const mapStateToProps = state => ({
	scrolltop: state.scrolltop,
	windowSize: state.windowSize,
	stanfordEvents: state.stanfordEvents,
	meetupEvents: state.meetupEvents,
	eventbriteEvents: state.eventbriteEvents,
	allEvents: state.allEvents,
	eventSourceMap: state.eventSourceMap
})

const mapDispatchToProps = dispatch => ({
	scrollTopCreate: scroll => dispatch(scrollTopCreate(scroll)),
	windowSizeCreate: windowSize => dispatch(windowSizeCreate(windowSize)),
	stanfordEventsRequest: () => dispatch(stanfordEventsRequest()),
	meetupEventsRequest: () => dispatch(meetupEventsRequest()),
	eventbriteEventsRequest: () => dispatch(eventbriteEventsRequest()),
	allEventsSet: events => dispatch(allEventsSet(events)),
	eventSourceMapSet: map => dispatch(eventSourceMapSet(map))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Landing)
