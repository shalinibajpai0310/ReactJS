import React from 'react'
import {render} from 'react-dom'

//import App from './components/app_with_javascript'
//import App from './components/app_with_JSX'
//import App from './components/app_with_props'
//import App from './components/app_with_state_n_event_handling'
//import App from './components/app_event_handling'
import ProductForm from './components/ProductForm'
import ProductTable from './components/ProductTable'
import ProductApp from './components/ProductApp'
//import App from './components/app_with_refs'
//import App from './components/app_with_children'

render(
	//React component with JavaScript
	//<App/>, document.getElementById('app')

	//React component with JSX
	<ProductApp/>, document.getElementById('app')
	//React component with props
	//<div><App fname="Tom" age={20} /><App fname="Jerry" age={30} /><App fname="Ivan" /></div>, document.getElementById('app')

	//React component with state
	//<App/>, document.getElementById('app')

	//React component with event handling
	//<div><App fname="Tom" /><App fname="Jerry" /><App fname="Ivan" /></div>, document.getElementById('app')

	//React component with refs
	//<App/>, document.getElementById('app')

	//React component with children
	//<App>This is the body of React component...</App>, document.getElementById('app')
)
