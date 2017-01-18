import React from 'react'

class App extends React.Component {
	action() {
		this.refs.destinationTextArea.value = this.refs.sourceTextArea.value;
	}
	render() {
		return(<div>
				<textarea ref="sourceTextArea" onChange={this.action.bind(this)}></textarea>
				<textarea ref="destinationTextArea"></textarea>
			</div>
		);
	}
}

export default App
