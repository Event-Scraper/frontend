import './index.scss'
import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class CustomSelect extends React.Component {
	state = {
		selectedOption: ''
	}

	render() {
		return (
			<Select
				name="form-field-name"
				className="custom-select"
				value={this.state.selectedOption}
				onChange={this.props.handleEventDisplay}
				options={this.props.eventKeys.map(key => {
					return { value: key, label: key }
				})}
			/>
		)
	}
}

export default CustomSelect
