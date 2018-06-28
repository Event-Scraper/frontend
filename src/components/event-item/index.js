import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { scrollTopCreate } from '../../../action/scrollTop-actions'

const Fragment = React.Fragment

class EventItem extends React.Component {
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
					onClick={() => {
						window.open(this.props.event.url, '_blank')
					}}
					className="event-item"
				>
					<div className="event-item__icon">
						<i
							title={this.props.event.source}
							className={this.props.event.icon}
						/>
					</div>
					<div
						className="event-item__img"
						style={{
							backgroundImage: `url(${
								this.props.event ? this.props.event.imgUrl : ''
							})`
						}}
					/>
					<div className="event-item__details">
						<h3>What: {this.props.event.title}</h3>
						<p> Where: {this.props.event.location}</p>
						<p> When: {this.props.event.time}</p>
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventItem)
