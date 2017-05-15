import React, { Component } from 'react';
import { Button } from 'react-bootstrap'; 
import { Modal } from 'react-bootstrap'; 
import { Glyphicon } from 'react-bootstrap'; 
import { Form } from 'react-bootstrap'; 
import { Col } from 'react-bootstrap'; 
import { FormGroup } from 'react-bootstrap'; 
import { FormControl } from 'react-bootstrap'; 


class QuestionnaireShowDialog extends Component {
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

	render() {
		const ControlLabel = 'text';
		return (
			<div>
				<Button bsStyle="link" onClick={this.open.bind(this)}>
					<Glyphicon glyph="zoom-in"/>
				</Button>

				<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>Show Questionnaire</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form horizontal>
							<FormGroup controlId="formTitle">
								<Col componentClass={ControlLabel} md={2}>
									Title
								</Col>
								<Col md={10}>
									<FormControl.Static>
										{this.props.questionnaire.title}
									</FormControl.Static>
								</Col>
							</FormGroup>
							<FormGroup controlId="formDescription">
								<Col componentClass={ControlLabel} md={2}>
									Description
								</Col>
								<Col md={10}>
									<FormControl.Static>
										{this.props.questionnaire.description}
									</FormControl.Static>
								</Col>
							</FormGroup>
							<FormGroup>
								<Col mdPush={10} md={2} className="text-right">
									<Button bsStyle="default" onClick={this.close.bind(this)}>Close</Button>
								</Col>
							</FormGroup>
						</Form>
					</Modal.Body>
				</Modal>
			</div>
		)
	}

	
}

export default QuestionnaireShowDialog;