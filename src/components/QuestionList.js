import React from 'react'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import 'semantic-ui-css/semantic.min.css'
import QuestionItem from './QuestionItem'
import {Accordion, Icon, Button, Container, Grid, Header, Segment, List, Loader} from 'semantic-ui-react'


const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

class QuestionList extends React.Component{

	render(){
		console.log("questionsList", this.props.passed)

		return(
			<container>
				<Segment.Group>
					<Segment>
						{this.props.passed.map(item => 

							<QuestionItem id={item.id} item={item}/>


			
			)}
					</Segment>
				</Segment.Group>
			</container>
		)
	}

}

export default QuestionList


