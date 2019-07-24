import React from 'react'
import { Button, Form, Icon, Message, Modal } from 'semantic-ui-react'
import { signUpUser } from '../actions/users'
import { fetchCategories } from '../actions/categories'
import { fetchTags } from '../actions/tags'
import { connect } from 'react-redux'

class Signup extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    modalOpen: true
  }

  handleOpen = () => this.setState({modalOpen: false})

  componentWillMount(){
    this.props.fetchCategories()
		this.props.fetchTags()
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
    this.props.signUpUser(email, password, first_name, last_name, this.props)
    console.log("in signup/submit", this.props)
  }

  render(){
    return(
      <Modal trigger={< Button onClick = {
        this.handleOpen
      }
      basic color = 'black' >  < /Button>} open={this.state.modalOpen} onClose={this.handleClose} basic size='fullscreen'>
        {/* <Header icon='privacy' id="login-icon"/> */}
        <Modal.Content>
      <div>
        <Message
          attached
          header='Welcome to My Demo v0.9'
          content='Fill out the form below to sign-up for a new account'
        />
        <Form onSubmit={this.handleSubmit} className='attached fluid segment'>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleFirstName} label='First Name' placeholder='First Name' type='text' required/>
            <Form.Input onChange={this.handleLastName} label='Last Name' placeholder='Last Name' type='text' required/>
          </Form.Group>
          <Form.Input onChange={this.handleEmailName} label='Email' type='Email' required/>
          <Form.Input onChange={this.handlePasswordChange} label='Password' type='password' required/>
          <Form.Checkbox inline label='I agree to the terms and conditions' />
          <Button color='blue'>Submit</Button>
        </Form>
        <Message attached='bottom' warning>
          <Icon name='help' />
          Already signed up?&nbsp;<a href='/'>Login here</a>&nbsp;instead.
        </Message>
      </div>
    </Modal.Content>
  </Modal>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signUpUser: (email, password, first_name, last_name, props) =>{
      dispatch(signUpUser(email, password, first_name, last_name, props))
    },
    fetchCategories: () =>{
  		dispatch(fetchCategories())
  	},
  	fetchTags: () =>{
  		dispatch(fetchTags())
  	}
  }
}

export default connect(null, mapDispatchToProps)(Signup)
