import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
    return (
    	<header>
	      <h1>{this.props.title}</h1>
	      <h4>{this.props.version}</h4>
	    </header>
    );
  }
}

export default Header;