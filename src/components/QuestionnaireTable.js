import React, { Component } from 'react';
import { Table } from 'react-bootstrap'; 
import QuestionnaireTableElement from './QuestionnaireTableElement';

class QuestionnaireTable extends Component{
	render(){
		return(
			<Table>
			    <thead>
			      <tr>
			        <th># Nr</th>
			        <th>Title</th>
			        <th>Description</th>
			      </tr>
			    </thead>
		    	<QuestionnaireTableElement onUpdate={this.props.onUpdate} onDelete={this.props.onDelete} questionnaires={this.props.questionnaires}/>
		  	</Table>
			);
	}
}

export default QuestionnaireTable;