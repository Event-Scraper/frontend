import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import createAppStore from '../../../lib/store'
import Landing from '../landing'
const Fragment = React.Fragment
const store = createAppStore()

class App extends React.Component {
	componentDidMount() {
		store.subscribe(() => {
			console.log('--___STATE___--', store.getState())
		})

		store.dispatch({ type: null })
	}

	render() {
		return (
			<Fragment>
				<Provider store={store}>
					<BrowserRouter>
						<Route exact path="/" component={Landing} />
					</BrowserRouter>
				</Provider>
			</Fragment>
		)
	}
}

export default App
