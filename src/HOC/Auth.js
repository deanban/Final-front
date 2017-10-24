import React from 'react'
import { Redirect } from 'react-router-dom'


function Auth(RenderedComponent) {
  return class extends React.Component {
    render() {
    	console.log("Auth is re-rendering", this.props.location)

      if (!localStorage.getItem('jwttoken') && this.props.location.pathname !== "/") {
        return <Redirect to="/" />
      }else if (localStorage.getItem('jwttoken') && (this.props.location.pathname === "/")){
        return <Redirect to="/home" />
      }else if (!localStorage.getItem('jwttoken') && (this.props.location.pathname === "/post")){
        return <Redirect to="/" />
      }else if (!localStorage.getItem('jwttoken') && (this.props.location.pathname === "/news")){
        return <Redirect to="/" />
      }else if (!localStorage.getItem('jwttoken') && (this.props.location.pathname === "/chat")){
        return <Redirect to="/" />
      }else if (!localStorage.getItem('jwttoken') && (this.props.location.pathname === "/profile")){
        return <Redirect to="/" />
      }else if (localStorage.getItem('jwttoken') && (this.props.location.pathname === "/signup")){
        return <Redirect to="/home" />
      }else {
        return <RenderedComponent {...this.props}/>
      }

    }
  }
}

export default Auth
