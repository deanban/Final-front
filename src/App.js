import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Login from './components/Login'
import { Route, Redirect, Switch } from 'react-router-dom'
import HomeContainer from './components/HomeContainer'
import Nav from './components/Nav'
import { withRouter } from 'react-router-dom'
import Auth from './HOC/Auth'
import { NavLink } from 'react-router-dom'
import { Grid, Image, Segment, Menu } from 'semantic-ui-react'
import PostQuestion from './components/PostQuestion'
import FetchNews from './components/FetchNews'
import Chatroom from './components/Chatroom'
import Signup from './components/Signup'


class App extends Component {

  render() {

  	const AuthHomeContainer = Auth(HomeContainer)
    const AuthLogin = Auth(Login)
    const AuthNav = Auth(Nav)


	console.log("App is re-rendering", this.state)

    return (

      <Grid>
        <Nav router={this.props}/>
        <Grid.Column stretched width={14}>
          <Segment>
          {/* <Route exact path="/" render={(routeProps) => <Login router={routeProps} />}/> */}
          <Route exact path="/" component={AuthLogin}/>
          <Route exact path="/home" component={AuthHomeContainer}/>
          <Route exact path='/post' component={PostQuestion} />
          <Route exact path='/news' component={FetchNews}  />
          <Route exact path='/chat' component={Chatroom}  />
          <Route exact path='/signup' render={(routeProps) => <Signup router={routeProps} />}/>

          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  console.log("App state", state)
	return {
    // categories: state.categories.categoriesList,
    // tags: state.tags.tagsList,
		currentUser: state.users

	}
}

export default withRouter(connect(mapStateToProps)(App));


 // <Route exact path="/home" component={AuthHomeContainer}/>
 //          <Route exact path="/" component={Login}/>
