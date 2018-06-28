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
		let arr = source.map(source => {
			return source.value
		})
		this.setState({ selectedOption: arr }, () => {
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
			if (diff.length) {
				diff.map(dif => {
					obj[dif] = false
				})
			}
			this.props.eventSourceMapSet(obj)
			setTimeout(() => {
				this.createSelectedArr()
			}, 1000)
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

	createSelectedArr = () => {
		let keys = Object.keys(this.props.eventSourceMap)
		this.setState({ selectedArr: [] }, () => {
			let arr = []
			keys.map(key => {
				if (this.props.eventSourceMap[key] === true) {
					let notation = key.toLowerCase() + 'Events'
					let arr2 = this.props[notation]
					for (let i = 0; i < arr2.length; i++) {
						arr.push(arr2[i])
					}
				}
				this.setState({ selectedArr: arr })
			})
		})
	}

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
