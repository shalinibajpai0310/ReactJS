import React from 'react'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 1};
	}
	incrementCount() {
		this.setState({count: this.state.count + 1});
	}
	render() {
		return <div><h1>Count = {this.state.count}</h1><input type='button' value='INCREMENT' onClick={this.incrementCount.bind(this)}></input></div>
	}
}

export default App
