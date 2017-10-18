import React from 'react'
import { NavLink}  from 'react-router-dom'

import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class Nav extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            <Menu.Item as={NavLink} to='/home' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item as={NavLink} to='/post' name='post question' active={activeItem === 'post question'} onClick={this.handleItemClick} />
            <Menu.Item as={NavLink} to='/news' name='news' active={activeItem === 'news'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

       
 
    )
  }
}


