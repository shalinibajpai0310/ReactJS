import React from 'react';

class Header extends React.Component {
   render() {
      return (
         <div className="header">
           <div className="title">
           <i className="fa fa-user-o user" aria-hidden="true"></i>
           <i className="fa fa-arrow-left user" aria-hidden="true"></i>
           <i className="fa fa-home user" aria-hidden="true"></i>
           <img src="../images/sap-logo.png" className="user"/>
			   Sales Overview
		   <i className="fa fa-search fa-1x search" aria-hidden="true"></i>
		  </div>
			
         </div>
      );
   }
}

export default Header;