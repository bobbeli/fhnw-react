import React, { Component } from 'react';
import QuestionnaireShowDialog from './QuestionnaireShowDialog';
import QuestionnaireUpdate from './QuestionnaireUpdate';
import QuestionnaireDelete from './QuestionnaireDelete';

class QuestionnaireTableElement extends Component {

	renderRow (){
		return this.props.questionnaires.map((q) =>
			<tr>
				<td>{q.id}</td>
				<td>{q.title}</td>
				<td>{q.description}</td>
				<td><QuestionnaireShowDialog questionnaire={q}/></td>
				<td><QuestionnaireUpdate onUpdate={this.props.onUpdate} questionnaire={q}/></td>
				<td><QuestionnaireDelete onDelete={this.props.onDelete} id={q.id}/></td>
			</tr>
			);
	}

	render() {
		

		return (
			<tbody>{this.renderRow()}</tbody>
		);
	}
}

export default QuestionnaireTableElement;

