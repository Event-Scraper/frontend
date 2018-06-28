import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { scrollTopCreate } from '../../../action/scrollTop-actions'
import { eventSourceMapSet } from '../../../action/event-source-map-actions'
import EventItem from '../event-item'
import CustomSelect from '../custom-select'

const Fragment = React.Fragment

class EventsDisplay extends React.Component {
	constructor(props) {
		super(props)

		this.state = { selectedArr: [], selectedOption: [] }
	}

	handleEventDisplay = source => {
		console.log(source)

		let arr = source.map(source => {
			return source.value
		})
		console.log(arr)
		this.setState({ selectedOption: arr }, () => {
			console.log('THIS IS THE SELECtED', this.state.selectedOption)
			let obj = { ...this.props.eventSourceMap }
			this.state.selectedOption.map(selected => {
				if (this.props.eventSourceMap[selected] === false) {
					obj[selected] = true
				}
			})
			let diff = this.arr_diff(
				this.state.selectedOption,
				Object.keys(this.props.eventSourceMap)
			)
			console.log('THIS IS THE DIFFERENCE', diff)
			if (diff.length) {
				diff.map(dif => {
					obj[dif] = false
				})
			}
			this.props.eventSourceMapSet(obj)
		})
	}

	arr_diff = (a1, a2) => {
		var a = [],
			diff = []

		for (var i = 0; i < a1.length; i++) {
			a[a1[i]] = true
		}

		for (var i = 0; i < a2.length; i++) {
			if (a[a2[i]]) {
				delete a[a2[i]]
			} else {
				a[a2[i]] = true
			}
		}

		for (var k in a) {
			diff.push(k)
		}

		return diff
	}

	createSelectedArr = () => {}

	render() {
		let keys = Object.keys(this.props.eventSourceMap)
		return (
			<Fragment>
				<CustomSelect
					handleEventDisplay={this.handleEventDisplay}
					eventKeys={keys}
					selectedOption={this.state.selectedOption}
				/>
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
