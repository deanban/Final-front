import React, { Component } from 'react'
import { Menu, Segment, Input, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/users'
import HomeContainer from './HomeContainer'

class MenuItem extends Component {
  state = {
    activeItem: 'home',
    searchStr: ""
   }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogOut = (event) => {
    this.props.logOutUser()
    console.log("in NAV logout", this.props)
    this.props.router.history.push('/home')
  }

  handleSearch = (event) => {
    this.setState({
      searchStr: event.target.value
    })

  }

  render() {
    const { activeItem } = this.state
    console.log("menu", this.props)
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Menu position='left'>
            <Menu.Item onChange={this.handleSearch}>
              <Input transparent icon={{ name: 'search', link: true }} placeholder='Search questions' />
              {/* <HomeContainer searchTerm={this.state.searchStr} /> */}
            </Menu.Item>
          <Menu.Item id="welcome-user">
            <h4>Welcome, {this.props.user.first_name}</h4>
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
