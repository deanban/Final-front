import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { NavLink}  from 'react-router-dom'


export default class RenderNews extends React.Component{

  render(){
    return(

        <Card fluid>
          <Image size='small' src={this.props.image}/>
          <Card.Content verticalAlign='middle'>
            <Card.Header><a href={this.props.url} target='_blank'>{this.props.name}</a></Card.Header>
          </Card.Content>
        </Card>

    )
  }
}
