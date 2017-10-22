import React from 'react'
// import { addQuestion, removeQuestion, fetchQuestions } from '../actions/questions'
import { fetchQuestions } from '../actions/questions'
// import { fetchCategories } from '../actions/categories'
// import { fetchTags } from '../actions/tags'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'
import { Grid, Image, Segment } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'


class HomeContainer extends React.Component{


	componentDidMount(){
		this.props.fetchQuestions()
		// this.props.fetchCategories()
		// this.props.fetchTags()
		console.log(this.props)
	}

	render(){
		console.log("rendering home", this.props)


		return(

			<Grid.Column stretched width={16}>
		          <Segment>
					    <QuestionList passed={this.props.questions}/>
		          </Segment>
        	</Grid.Column>

			)
	}
}

function mapStateToProps(state) {
	//console.log("login", state)
  return {
    questions: state.questions.questionslist
	}
}

function mapDispatchToProps(dispatch) {
  return {
  	fetchQuestions: () =>{
  		dispatch(fetchQuestions())
  	}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
