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


class App extends Component {

  render() {

  	const AuthHomeContainer = Auth(HomeContainer)


	console.log("in app", this.props)
    
    return (
  
      <Grid>
        <Nav/>
        <Grid.Column stretched width={14}>
          <Segment>
          <Route exact path="/" render={(routeProps) => <Login router={routeProps} />}/>
          <Route exact path="/home" component={AuthHomeContainer}/>
          <Route exact path='/post' component={PostQuestion} />     
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
	return {
		currentUser: state.users
	}
}

export default withRouter(connect(mapStateToProps)(App));


 // <Route exact path="/home" component={AuthHomeContainer}/>
 //          <Route exact path="/" component={Login}/>