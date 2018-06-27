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
				<div className="event-item">
					<h1>HELLO</h1>
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
