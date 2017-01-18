import React from 'react'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.myaction = this.myaction.bind(this);
	}
	myaction() {
			alert("Hi " + this.props.fname);
	}
	render() {
		return(<h1>
				I am {this.props.fname}!!
				<a href="#" onClick={this.myaction.bind(this)}>   Who am I?</a>
			</h1>
		);
	}
}

export default App
