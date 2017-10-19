import React from 'react'
import { Item } from 'semantic-ui-react'
import { NavLink}  from 'react-router-dom'


export default class RenderNews extends React.Component{
  
  render(){
    return(
      
        <Item>
          <Item.Image size='tiny' src={this.props.image}/>
          <Item.Content verticalAlign='middle'>
            <Item.Header as='NavLink' to={this.props.url}>{this.props.name}</Item.Header>
          </Item.Content>
        </Item>
  
    )
  }
}

