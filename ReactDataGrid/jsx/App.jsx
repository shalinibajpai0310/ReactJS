import React from 'react';
import Header from './Header.jsx';
import Welcome from './Welcome.jsx';
import Dashboard from './Dashboard.jsx';

class App extends React.Component {
   render() {
      return (
		  <div>
			  <Header></Header>
			  <Welcome></Welcome>
              <Dashboard></Dashboard>
		    </div>
      );
   }
}

export default App;