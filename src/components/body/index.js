import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import Header from '../header'
import Events from '../events'

const Fragment = React.Fragment

class Body extends React.Component {
	render() {
		return (
			<Fragment>
				<Header
					opacity={this.props.opacity}
					setWindowSize={this.props.setWindowSize}
				/>
				<Events />
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch, getState) => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Body)
