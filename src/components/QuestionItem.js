import React, { Component } from 'react'
import { Grid, Accordion, Icon, Divider, Button } from 'semantic-ui-react'
import AnswerForm from './AnswerForm'
// import { increment, decrement, clear } from '../actions/votes'
import { connect } from 'react-redux'
import Vote_button from './Vote_button'


class QuestionItem extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    console.log("item", this.props)

    return (
      <Accordion styled>
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
        <AnswerForm questionid={this.props.id} userid={this.props.item.user_id}/>
        </Accordion.Content>
      </Accordion>
    )
  }
}


export default QuestionItem
