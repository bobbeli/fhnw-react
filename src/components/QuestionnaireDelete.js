import React, { Component } from 'react';
import { Button } from 'react-bootstrap'; 
import { Glyphicon } from 'react-bootstrap'; 
import { Modal } from 'react-bootstrap'; 
import { Form } from 'react-bootstrap'; 
import { Col } from 'react-bootstrap'; 
import { FormGroup } from 'react-bootstrap'; 
import { FormControl } from 'react-bootstrap'; 


class QuestionnaireDelete extends Component {
	constructor(props) {
		super(props)
		this.state = { showModal: false }
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	deleteQuestionnaire(){
		this.setState({ showModal: false })
		this.props.onDelete( 
			this.props.id
		);
	}

	render() {
		return (
			<div>
				<Button bsStyle="link" onClick={this.open.bind(this)}>
					<Glyphicon glyph="trash"/>
				</Button>
			

				<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>Delete Questionnaire</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form horizontal>
							<FormGroup>
								<Col mdPush={10} md={2} className="text-right">
									<Button bsStyle="default" onClick={this.close.bind(this)}>Cancel</Button>
									<Button bsStyle="error" onClick={this.deleteQuestionnaire.bind(this)}>Delete</Button>
								</Col>
							</FormGroup>
						</Form>
					</Modal.Body>
				</Modal>
			</div>
		)
	}	
}

export default QuestionnaireDelete;