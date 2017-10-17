import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Login from './components/Login'
import { Route, Redirect, Switch } from 'react-router-dom'
import HomeContainer from './components/HomeContainer'
import Home from './components/Home'
import { withRouter } from 'react-router-dom'
import Auth from './HOC/Auth'





class App extends Component {

  render() {

  	const AuthHomeContainer = Auth(HomeContainer)


	console.log("in app", this.props)
    
    return (
      <div className="App">

         
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={AuthHomeContainer}/>
          {/*<Route path="/users" component={UsersContainer} />*/}

        </div>
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