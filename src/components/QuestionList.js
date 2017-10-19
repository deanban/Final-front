import React from 'react'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import 'semantic-ui-css/semantic.min.css'
import QuestionItem from './QuestionItem'
import {Accordion, Icon, Button, Container, Grid, Header, Segment, List, Loader} from 'semantic-ui-react'


class QuestionList extends React.Component{

	render(){
		console.log("questionsList", this.props.passed)

    if(this.props.passed && this.props.passed.length > 0){
  		return(
  			<Grid.Column stretched width={10}>
  				<Segment.Group>
  					<Segment>
  						{this.props.passed.map(item => <QuestionItem id={item.id} item={item}/> )}
  					</Segment>
  				</Segment.Group>
  			</Grid.Column>
      )
    }else{
      return(
        <Loader active inline='centered' />
      )
    }
	}

}

export default QuestionList
