import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import { renderIf } from '../../../lib/util'
import { scrollTopCreate } from '../../../action/scrollTop-actions'

const Fragment = React.Fragment

class NavBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<ul className="nav-bar">
				<li
					onClick={() => this.props.handleNav(0.5, 500)}
					className="nav-bar__li"
				>
					<div
						style={{
							color:
								this.props.scrolltop.scrollTop <
								this.props.scrolltop.eventsOffsetTop * 2
									? 'mediumvioletred'
									: 'white'
						}}
						className="nav-bar__li__nav-link"
					>
						<i className="material-icons">home</i>
						<p>Home</p>
					</div>
				</li>
				<li
					onClick={() =>
						this.props.handleNav(this.props.scrolltop.eventsOffsetTop, 500)
					}
					className="nav-bar__li"
				>
					<div
						style={{
							color:
								this.props.scrolltop.scrollTop >=
								this.props.scrolltop.eventsOffsetTop * 2
									? 'rgba(11, 93, 30, 1)'
									: 'white'
						}}
						className="nav-bar__li__nav-link"
					>
						<i className="material-icons">account_box</i>
						<p>Upcoming Events</p>
					</div>
				</li>
			</ul>
		)
	}
}

const mapStateToProps = state => ({
	scrolltop: state.scrolltop
})

const mapDispatchToProps = dispatch => ({
	scrollTopCreate: scroll => dispatch(scrollTopCreate(scroll))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar)
