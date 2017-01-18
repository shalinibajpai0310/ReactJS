import React from 'react'

class App extends React.Component {
	render() {
		return <div><h1>Hello {this.props.fname}, your age is {this.props.age}</h1></div>
	}
}
App.propTypes = { 
			fname:  function(props, propName, componentName) {
						if (props[propName].length < 3)
							return Error('First name must be at least 3 characters long');
			},
			age: React.PropTypes.number
};
App.defaultProps = {
		age: 35
};

export default App
