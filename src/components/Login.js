import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { fetchUser } from '../actions/users'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { fetchQuestions } from '../actions/questions'
import { fetchCategories } from '../actions/categories'
import { fetchTags } from '../actions/tags'


class Login extends React.Component {

    state = {
      email: "",
      password: ""
    }

  handleEmailChange = (event) => {
    // debugger
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
    console.log(this.state)
    // debugger
    this.props.fetchUser(email, password)
    // this.props.router.history.push('/home')
      // .then((token) => {
      //   localStorage.setItem("jwttoken", token)
      // })
      //   console.log("loginprops", this.props)
      //   this.props.router.history.push('/home')
      // })
  }

  componentDidMount(){
		// this.props.fetchQuestions()
		this.props.fetchCategories()
		this.props.fetchTags()
	}

  render(){
    // debugger
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
                New to us? <a href='signup'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

function mapStateToProps(state) {
	//console.log("login", state)
  return {
    // questions: state.questions.questionslist,
    user: state.users,
    isFetching: state.questions.isFetching

  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: (email, password) =>{
      dispatch(fetchUser(email, password))
    },
  	// fetchQuestions: () =>{
  	// 	dispatch(fetchQuestions())
  	// },
  	fetchCategories: () =>{
  		dispatch(fetchCategories())
  	},
  	fetchTags: () =>{
  		dispatch(fetchTags())
  	}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)
