import React, { Component } from 'react'
import { Menu, Segment, Input, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/users'

class MenuItem extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogOut = (event) => {
    this.props.logOutUser()
    console.log("in NAV logout", this.props)
    this.props.router.history.push('/home')
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Menu position='left'>
            <Menu.Item>
              <Input transparent icon={{ name: 'search', link: true }} placeholder='Search questions' />
            </Menu.Item>
          </Menu.Menu>
          <Button basic color='red' icon='log out' onClick={this.handleLogOut}/>
        </Menu>
      </div>
    )
  }
}

function mapStateToProps(state) {
	console.log("in menu", state)
  return {
    user: state.users
	}
}

function mapDispatchToProps(dispatch) {
  return {
    logOutUser: () =>{
      dispatch(logOutUser)

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
