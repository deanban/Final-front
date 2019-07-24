import React from 'react'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import 'semantic-ui-css/semantic.min.css'
import ProfileItem from './ProfileItem'
import {Accordion, Icon, Button, Container, Grid, Header, Segment, List, Loader} from 'semantic-ui-react'


class ProfileList extends React.Component{

	render(){
		// console.log("ProfileList", this.props)

		const questions = this.props.passed.filter((item, user_id) => item.user_id === this.props.user.id)
		const answers = this.props.passed.map((items) => items.answers)
		const flattenedAnswers = answers.reduce((a, b) => a.concat(b), [])
		// const nestedAnswers = answers.map(items => items)
		const filteredAnswers = flattenedAnswers.filter((elem, user_id) => elem.user_id === this.props.user.id)
		const questionsFromFilteredAnswers = filteredAnswers.map(item => item.question.title)
		// debugger
		// console.log("profilelist/questions", questionsFromFilteredAnswers)

  		return(
  			<Grid.Column stretched width={8}>
					<ProfileItem qprops={questions} aprops={questionsFromFilteredAnswers}/>
  			</Grid.Column>
      )
    }
	}


export default ProfileList
