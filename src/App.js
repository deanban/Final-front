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
import Profile from './components/Profile'


class App extends Component {

  render() {

  	const AuthHomeContainer = Auth(HomeContainer)
    const AuthLogin = Auth(Login)
    const AuthNav = Auth(Nav)
    const AuthPostQuestion = Auth(PostQuestion)
    const AuthNews = Auth(FetchNews)
    const AuthChat = Auth(Chatroom)
    const AuthProfile = Auth(Profile)
    const AuthSignup = Auth(Signup)


	console.log("App is re-rendering", this.state)

    return (

      <Grid>
        <Nav router={this.props}/>
        <Grid.Column stretched width={14}>
          {/* <Route exact path="/" render={(routeProps) => <Login router={routeProps} />}/> */}
          <Route exact path="/" component={AuthLogin}/>
          <Route exact path="/home" component={AuthHomeContainer}/>
          <Route exact path='/post' component={AuthPostQuestion} />
          <Route exact path='/news' component={AuthNews}  />
          <Route exact path='/chat' component={AuthChat}  />
          <Route exact path='/profile' component={AuthProfile}  />
          <Route exact path='/signup' component={AuthSignup}/>
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
