import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react'

class Signup extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: ''
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

  render(){
    return(
      <Form>
        <Form.Group required widths={2}>
          <Form.Input onChange={this.handleFirstName} label='First name' placeholder='First name' />
          <Form.Input onChange={this.handleLastName} label='Last name' placeholder='Last name' />
        </Form.Group>
        <Form.Group required>
          <Input onChange={this.handleEmailName} label='@' placeholder='Email Address' />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default Signup
