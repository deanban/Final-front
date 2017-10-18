import React from 'react'
// import BooksList from './BooksList'
// import BookDetail from './BookDetail'
// import BooksForm from './BooksForm'
import { addQuestion, removeQuestion, fetchQuestions } from '../actions/questions'
import * as QuestionActions from '../actions/questions'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'
import { Grid, Image, Segment } from 'semantic-ui-react'

class HomeContainer extends React.Component{


	componentDidMount(){
		this.props.fetchQuestions()
		console.log(this.props)
	}

	render(){
		console.log("rendering home", this.props.questions)


		return(
			<Grid.Column stretched width={12}>
		          <Segment>
					    <QuestionList passed={this.props.questions}/>
		          </Segment>
        	</Grid.Column>
			
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
