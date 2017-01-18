import React from 'react'

class App extends React.Component {
	render() {
		var textboxComp = React.createElement("input", {type: 'text', name: 'fname'}, null); //null stands for no children elements.
		var brComp = React.createElement("br", null, null);
		var labelComp = React.createElement("label", null, "This is my first JavaScript React app.."); //null stands for no children elements.
		return React.createElement("div", null, [labelComp, brComp, textboxComp]); //null stands for no attributes
	}
}

export default App
