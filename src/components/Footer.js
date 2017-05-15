import React from 'react';
import { render } from 'react-dom';
import { Col } from 'react-bootstrap'; 

class Footer extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
	    return (
	    	<footer>
	    		<Col xs={4}>{this.props.leftMessage}</Col>
	    		<Col xs={4} xsOffset={4} className='text-right'> Total of {this.props.countMsg} questionnaires</Col>
	    	</footer>
	    );
	}
}

export default Footer;