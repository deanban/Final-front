import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import { signUpUser } from '../actions/users'
import { connect } from 'react-redux'

class Signup extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleEmailName = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const email = this.state.email.toLowerCase()
    const password = this.state.password
    const first_name = this.state.firstName
    const last_name = this.state.lastName
    console.log(this.state)
    // debugger
    this.props.signUpUser(email, password, first_name, last_name)
    console.log("in signup/submit", this.props)
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input onChange={this.handleFirstName} label='First name' placeholder='First name' required/>
          <Form.Input onChange={this.handleLastName} label='Last name' placeholder='Last name' required/>
        </Form.Group>
        <Form.Group required>
          <Form.Input onChange={this.handleEmailName} label='Email' placeholder='Email Address' width={16} required/>
        </Form.Group>
        <Form.Group>
          <Form.Input
            required
            width={8}
            placeholder='Password'
            label='Password'
            type='password'
            onChange={this.handlePasswordChange}
          />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signUpUser: (email, password, first_name, last_name) =>{
      dispatch(signUpUser(email, password, first_name, last_name))
    }
  }
}


export default connect(null, mapDispatchToProps)(Signup)
