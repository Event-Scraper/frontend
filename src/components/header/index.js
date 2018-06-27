import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { renderIf } from '../../../lib/util'
import { connect } from 'react-redux'

const Fragment = React.Fragment

class Header extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.props.setWindowSize()
	}
	render() {
		return (
			<Fragment>
				<header
					style={{
						opacity: this.props.opacity,
						minHeight: this.props.windowSize.height
					}}
					className="header"
				>
					<section className="title">
						<h1 className="titleName gold-text heading">Quick Events</h1>
						<h4 className="titleName gold-text subheading">
							From Stanford, Eventbrite, and Meetup.
						</h4>
					</section>
					<i className="material-icons arrow-down">keyboard_arrow_down</i>
				</header>,
				<div />
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	scrolltop: state.scrolltop,
	windowSize: state.windowSize
})

const mapDispatchToProps = dispatch => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)
