import React, { Component } from 'react';
import { Button } from 'react-bootstrap'; 
import { Modal } from 'react-bootstrap'; 
import { Glyphicon } from 'react-bootstrap'; 
import { Form } from 'react-bootstrap'; 
import { Col } from 'react-bootstrap'; 
import { FormGroup } from 'react-bootstrap'; 
import { FormControl } from 'react-bootstrap'; 


class QuestionnaireCreate extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			showModal: false,
			title: '',
			description: '',
			questionnaire: ''
		}
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	createQuestionnaire(){
		// Create new Questionnaire und übergabe
		this.setState({ showModal: false });
		this.props.onCreate( this.state.title, this.state.description );
	}

	handleChangeTitle(event){
		this.setState({ 
			title: event.target.value,
		});
	}

	handleChangeDescription(event){
		this.setState({ 
			description: event.target.value 
		});
	}


	render() {
		const ControlLabel = 'text';
		return (
			<div>
				<Col xs={4} xsOffset={8} className='text-right'>
						<Button className="text-right" bsStyle="link" onClick={this.open.bind(this)}>
						<Glyphicon glyph="plus"/>
					</Button>
				</Col>

				<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>Create Questionnaire</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form horizontal>
							<FormGroup>
								<Col md={10}>
									<FormControl
										id="formTitle"
									    type="text"
									    label="Title"
									    placeholder="Title"
									    onChange={this.handleChangeTitle.bind(this)}
									    value={this.state.title}
									 	> 
									</FormControl>
								</Col>
							</FormGroup>
							<FormGroup>
								<Col md={10}>
									<FormControl 
										id="formDescription" 
										componentClass="textarea" 
										onChange={this.handleChangeDescription.bind(this)}
										value={this.state.description}
										placeholder="Beschreibung">
									</FormControl>
								</Col>
							</FormGroup>
							<FormGroup>
								
								<Col mdPush={10} md={2} className="text-right">
									<Button bsStyle="error" onClick={this.close.bind(this)}>Cancel</Button>

									<Button bsStyle="default" onClick={this.createQuestionnaire.bind(this)}>Save</Button>
								</Col>
							</FormGroup>
						</Form>
					</Modal.Body>
				</Modal>
			</div>
		)
	}p	
}

export default QuestionnaireCreate;