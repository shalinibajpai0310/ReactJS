import React from 'react';

class Header extends React.Component {
   render() {
      return (
		  <div className="header">
			  <div className="col-md-1 col-sm-1"></div>
			  <div className="col-md-2 col-sm-2">
				  	<i className="fa fa-user-o icon" aria-hidden="true"></i>
			  		<i className="fa fa-home icon" aria-hidden="true"></i>
				  <div className="sap-img"></div>
			  </div>
			  <div className="col-md-7 col-sm-2 title">
				  <div className="col-md-10">Sales Overview</div>
			  </div>
			  <div className="col-md-2 search">
			  	<i className="fa fa-search fa-1x icon" aria-hidden="true"></i>
			  </div>
		  </div>
      );
   }
}

export default Header;