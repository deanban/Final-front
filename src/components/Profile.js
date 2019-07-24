import React from 'react'
// import { addQuestion, removeQuestion, fetchQuestions } from '../actions/questions'
import { fetchQuestions } from '../actions/questions'
import { refetchUserInfo } from '../actions/users'
// import { fetchCategories } from '../actions/categories'
// import { fetchTags } from '../actions/tags'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ProfileList from './ProfileList'
// import Profile from './Profile'
import { Grid, Image, Segment } from 'semantic-ui-react'
// import { bindActionCreators } from 'redux'


class Profile extends React.Component{


	componentDidMount(){
		console.log("profile", this.props)
		if(this.props.user.id !== ""){
			this.props.fetchQuestions()
			// console.log("in profile", userId)
		} else {
			this.props.refetchUserInfo(localStorage.getItem("jwttoken"))
		}
		// console.log("THIS LINE WILL ALWAYS RUN")
		// userId = this.props.user.id
		// debugger
	}

	render(){
		// console.log("rendering Profile", this.props)
		// debugger
		return(
			<Grid.Column stretched width={16}>
				<ProfileList passed={this.props.questions} user={this.props.user}/>
      </Grid.Column>
			)
	}
}

function mapStateToProps(state) {
	//console.log("login", state)
  return {
    questions: state.questions.questionslist,
		user: state.users
	}
}

function mapDispatchToProps(dispatch) {
  return {
  	fetchQuestions: () =>{
  		dispatch(fetchQuestions())
  	},
		refetchUserInfo: (token) => {
			dispatch(refetchUserInfo(token))
		}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)


// // state = { activeIndex: 0 }
// //
// // handleClick = (e, titleProps) => {
// //   const { index } = titleProps
// //   const { activeIndex } = this.state
// //   const newIndex = activeIndex === index ? -1 : index
// //
// //   this.setState({ activeIndex: newIndex })
// // }
//
// render() {
// 	// const { activeIndex } = this.state
//
// 	// console.log("item", this.props.id, this.props.item)
// 	// debugger
// 	// console.log("profile.userProfile", this.props.userProfile.map(item => item.answers.map(question => question.title)))
// 	console.log("@profile.userProfile", this.props.)
//
// 	// const answerTitles = this.props.userProfile
// 	// const answerLoop = () => {
// 	//   {for (let i = 0; i < answerTitles.length; i++) {
// 	//     text += answerTitles[i];
// 	//     }
// 	// }
// 	// console.log("profile.render", answerTitles)
// 	return (
// 		<Grid.Column stretched width={16}>
// 			<ProfileList passed={this.props.passed}/>
// 		</Grid.Column>
// 	)
// }
// }
//
// function mapStateToProps(state) {
// console.log("@Profile", state)
// return {
// 	// questions: state.questions.questionslist,
// 	user: state.users,
// 	// userProfile: state.userProfile.profileList
// 	// questions: state.questions.questionslist
// }
// }
//
// function mapDispatchToProps(dispatch){
// return{
// 	fetchForProfilePage: (userId) => {
// 		dispatch(fetchForProfilePage(userId))
// 	},
// 	refetchUserInfo: (token) => {
// 		dispatch(refetchUserInfo(token))
// 	}
// 	// fetchQuestions: () =>{
// 	// 	dispatch(fetchQuestions())
// 	// }
//
// }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Profile)
