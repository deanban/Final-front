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
    // console.log("current user", this.props.currentUser)
    event.preventDefault()
    this.props.fetchUser(this.state.email.toLowerCase(), this.state.password)
      .then((token) => {
        localStorage.setItem("jwttoken", token)
        console.log("loginprops", this.props)
        this.props.router.history.push('/home')
      })


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
  return {
    user: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)
