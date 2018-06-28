import './index.scss'
import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class CustomSelect extends React.Component {
	state = {}

	render() {
		return (
			<Select
				name="form-field-name"
				className="custom-select"
				multi
				// joinValues
				value={this.props.selectedOption}
				onChange={e => this.props.handleEventDisplay(e)}
				placeholder="Select your favourite(s)"
				options={this.props.eventKeys.map(key => {
					return { value: key, label: key }
				})}
			/>
		)
	}
}

export default CustomSelect
