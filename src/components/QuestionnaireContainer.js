import React, { Component } from 'react';
import QuestionnaireTable from './QuestionnaireTable';


class QuestionnaireContainer extends Component {
	render() {
		return (
			<div>
				<QuestionnaireTable questionnaires={this.props.questionnaires} onDelete={this.props.onDelete} onUpdate={this.props.onUpdate} />
			</div>
			);
	}
}



export default QuestionnaireContainer;
