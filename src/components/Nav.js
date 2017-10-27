import React from 'react'
import { NavLink}  from 'react-router-dom'

import { Grid, Menu, Segment, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/users'


export default class Nav extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  // handleLogOut = (event) => {
  //   this.props.logOutUser()
  //   console.log("in NAV logout", this.props)
  //   this.props.router.history.push('/home')
  // }

  render() {
    const { activeItem } = this.state

    return (

        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            <Menu.Item as={NavLink} to='/home' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item as={NavLink} to='/post' name='post question' active={activeItem === 'post question'} onClick={this.handleItemClick} />
            <Menu.Item as={NavLink} to='/news' name='news' active={activeItem === 'news'} onClick={this.handleItemClick} />
            <Menu.Item as={NavLink} to='/chat' name='chatroom' active={activeItem === 'chatroom'} onClick={this.handleItemClick} />
            {/* <Menu.Item as={NavLink} to='/profile' name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} /> */}
            {/* <Button onClick={this.handleLogOut}color='red' fluid>Sign Out</Button> */}

          </Menu>
        </Grid.Column>
    )
  }
}

// function mapStateToProps(state) {
// 	console.log("in NAV", state)
//   return {
//     user: state.users
// 	}
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     logOutUser: () =>{
//       dispatch(logOutUser)
//
//     }
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Nav)
