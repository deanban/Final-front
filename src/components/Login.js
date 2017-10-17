import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import * as UserActions from '../actions/users'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Login extends React.Component {

  constructor(){
    super()

    this.state = {
      email: "",
      password: ""
    }
  }

  handleEmailChange = (event) => {
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
    console.log(this.state)
    this.props.fetchUser(this.state.email.toLowerCase(), this.state.password)

  }
  render(){
    return(
        <div className='login-form'>
          
          <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}</style>
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              
              <Form size='large' onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='E-mail address'
                    onChange={this.handleEmailChange}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={this.handlePasswordChange}
                  />

                  <Button color='black' fluid size='large'>Login</Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href='#'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("userlogin", state.user)
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)
