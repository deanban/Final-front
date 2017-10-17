import React from 'react'
// import BooksList from './BooksList'
// import BookDetail from './BookDetail'
// import BooksForm from './BooksForm'
import { addQuestion, removeQuestion, fetchQuestions } from '../actions/questions'
import * as QuestionActions from '../actions/questions'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'

class HomeContainer extends React.Component{


	componentDidMount(){
		this.props.fetchQuestions()
		console.log(this.props)
	}

	render(){
		console.log("rendering home", this.props.questions)


		return(
			<div class="ui grid">
				<QuestionList passed={this.props.questions}/>
			
			</div>
			)
	}
}

function mapStateToProps(state) {
	console.log("homecontainer", state)
  return {
    questions: state.questions.list,
    isFetching: state.questions.isFetching

  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuestions: () => {
       
      dispatch(fetchQuestions())
    },
    addQuestion: (title) => {
     
      dispatch(addQuestion(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)