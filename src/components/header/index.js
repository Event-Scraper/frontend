import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { renderIf } from '../../../lib/util'

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
				<header style={{ opacity: this.props.opacity }} className="header">
					<section className="title">
						<h1 className="titleName gold-text heading">Front-end Developer</h1>
						<h4 className="titleName gold-text subheading">
							Based in Seattle, but Made in Canada.
						</h4>
						<img
							className="grillimg shadowfilter"
							src="https://s3-us-west-2.amazonaws.com/james-billard.com-images/logo.png"
						/>
					</section>
					<i className="material-icons arrow-down">keyboard_arrow_down</i>
				</header>,
				<div />
			</Fragment>
		)
	}
}

export default Header
