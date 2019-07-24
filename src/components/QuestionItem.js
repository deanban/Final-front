import React, { Component } from 'react'
import { Grid, Accordion, Icon, Divider, Button } from 'semantic-ui-react'
import AnswerForm from './AnswerForm'
// import { increment, decrement, clear } from '../actions/votes'
import { connect } from 'react-redux'
import Vote_button from './Vote_button'

class QuestionItem extends Component {
  state = {
    activeIndex: 0,
    refresh: false
  }

  // handleSubmit = (event, callback) => {
  //   console.log("AnswerForm", this.props)
  //   event.preventDefault()
  //   console.log("clicked")
  //   let body = {
  //     title: event.target.parentElement.firstChild.childNodes[0].childNodes[1].value,
  //     user_id: this.state.userid,
  //     question_id: this.state.questionid
  //   }
  //   console.log("body/titile", body.title)
  //   body = JSON.stringify(body)
  //   fetch('http://localhost:3000/api/v1/answers', {
  //     method: 'post',
  //     body: body,
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     }
  //   }).then(res => res.json())
  //   .then(json => {
  //     callback()
  //     this.setState({
  //       refresh: true
  //     })
  //     console.log("answerform/redirect", this.props)
  //     // this.props.history.push('/home')
  //   })
  //
  // }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    console.log("item", this.props)

    // debugger

    return (
      <Accordion styled fluid>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          {this.props.item.title}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>

          {this.props.item.answers.map(answer =>
          <p>
            {answer.title}
            <Vote_button userid={answer.user_id} answerid={answer.id} votecount={answer.total_votes}/>
          {/* <Divider section/> */}
          </p>
        )}
        <AnswerForm questionid={this.props.id} userid={this.props.item.user_id} {...this.props}/>
        </Accordion.Content>
      </Accordion>
    )
  }
}


export default QuestionItem
