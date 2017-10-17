import React from 'react'
import { Redirect } from 'react-router-dom'


function Auth(RenderedComponent) {
  return class extends React.Component {


    render() {
    	console.log("auth", ...this.props)
      if (!localStorage.getItem('jwttoken') && this.props.location.pathname !== "/") {
        return <Redirect to="/" />
      } else if (localStorage.getItem('jwttoken') && (this.props.location.pathname === "/")){
        return <Redirect to="/home" />
      } else {
        return <RenderedComponent {...this.props}/>
      }

    }
  }
}

export default Auth