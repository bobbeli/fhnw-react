import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import QuestionnaireContainer from './QuestionnaireContainer';
import QuestionnaireCreate from './QuestionnaireCreate';
import '../App.css';
import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props);

	this.onCreate = this.onCreate.bind(this);
	this.onDelete = this.onDelete.bind(this);
	this.onUpdate = this.onUpdate.bind(this);

    this.state = { 
      questionnaires : [
        {'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1'},
        {'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2'},
        {'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3'},
        {'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4'},
        {'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5'}
      ]
    }



  }

  /**
   * Create New Questionnaire
   * @param  {string} title       Title of Questionnaire
   * @param  {string} description Descrioption of Questionnaire
   */
  onCreate(title, description) {
  	// get valid ID
    var newId = this.generateValidID();

    // creating new questionnaire obj
    var questionnaire = {'id': newId, 'title': title, 'description': description};

    // creating new Array with values of questionnaire var
    var newQuestionnaires = _.concat(this.state.questionnaires, questionnaire)

    // updating the questionnaire Array
    this.setState({questionnaires: newQuestionnaires});

    console.log ('Created new Questionnaire: '+newId+' '+title+' '+description );

  }

  // Updating existing Questionnaire
  onUpdate(id, title, description) {

  	var questionnaires = this.state.questionnaires;

  	var questionnaire = questionnaires.find(q => q.id === id);
	
  	questionnaire.title = title;
  	questionnaire.description = description;

    // updating the questionnaire Array
    this.setState({questionnaires: questionnaires});

  }

  onDelete(id){
  	var questionnaires = this.state.questionnaires.filter(q => q.id != id);
  	console.log(questionnaires);

  	this.setState({questionnaires: questionnaires});
  	console.log('Deleted Questionnaire with id: '+id);
  }

  /**
   * Generates a Valid Questionnaire ID
   * Returns the hightest id + 1
   * @return {obj} int
   */
  generateValidID(){
  	var questionnaires = this.state.questionnaires;
  	if( questionnaires.length < 1 ){
  		return 1;
  	}
  	return _.first(_.orderBy(questionnaires, ['id'], ['desc'])).id + 1;

  }

  render() {
    return (
      <main>
        <Header title='Flashcard Client with React' version='Version 1.0' />
        <QuestionnaireCreate onCreate={this.onCreate} />
        <QuestionnaireContainer questionnaires={this.state.questionnaires} onUpdate={this.onUpdate} onDelete={this.onDelete}/>
        <Footer leftMessage='&copy; The FHNW Team' countMsg={this.state.questionnaires.length} />
      </main>
    );
  }
}


export default App;
