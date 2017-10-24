import React from 'react'
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { fetchForProfilePage } from '../actions/profile'
import { refetchUserInfo } from '../actions/users'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { fetchQuestions } from '../actions/questions'
// import { fetchCategories } from '../actions/categories'
// import { fetchTags } from '../actions/tags'
import { Grid, Accordion, Icon, Divider } from 'semantic-ui-react'


class Profile extends React.Component{

  componentDidMount(){
    console.log("profile", this.props)
    if(this.props.user.id != ""){
      this.props.fetchForProfilePage(this.props.user.id)
      // console.log("in profile", userId)
    } else {
      this.props.refetchUserInfo(localStorage.getItem("jwttoken"))
    }
    console.log("THIS LINE WILL ALWAYS RUN")
    // userId = this.props.user.id
    // debugger
  }

  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    // console.log("item", this.props.id, this.props.item)

    console.log("profile", this.props)
    return (
      <Grid.Column>
      <Accordion styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          {this.props.userProfile.questions.title}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          {/* {this.props.item.answers.map(answer => */}
          <p>
            {/* {answer.title} */}
          {/* <Divider section/> */}
          </p>
          {/* )} */}
        {/* <AnswerForm questionid={this.props.id} userid={this.props.item.user_id}/> */}
        </Accordion.Content>
      </Accordion>
    </Grid.Column>
    )
  }
}

function mapStateToProps(state) {
	console.log("@Profile", state)
  return {
    // questions: state.questions.questionslist,
    user: state.users,
    userProfile: state.userProfile.profileList
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchForProfilePage: (userId) => {
      dispatch(fetchForProfilePage(userId))
    },
    refetchUserInfo: (token) => {
      dispatch(refetchUserInfo(token))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
