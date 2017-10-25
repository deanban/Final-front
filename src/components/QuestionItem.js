import React, { Component } from 'react'
import { Grid, Accordion, Icon, Divider, Button } from 'semantic-ui-react'
import AnswerForm from './AnswerForm'
import { increment, decrement, clear } from '../actions/votes'
import { connect } from 'react-redux'


class QuestionItem extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  handleLikeButton = (event) => {
    this.props.onIncrement()
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

            <Button
              onClick={this.handleLikeButton}
              color='red'
              content='Like'
              icon='heart'
              label={{ basic: true, color: 'red', pointing: 'left', content: this.props.newCount}}
            />
          {/* <Divider section/> */}
          </p>
          )}
        <AnswerForm questionid={this.props.id} userid={this.props.item.user_id}/>
        </Accordion.Content>
      </Accordion>
    )
  }
}

function mapStateToProps(state) {
  return {
    newCount: state.count
  }

}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => {
      console.log("Incrementing")
      dispatch(increment())
    },
    onDecrement: () => {
      console.log("DECREMENTING")
      dispatch(decrement())
    },
    onClear: () => {
      console.log("CLearing")
      dispatch(clear())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionItem)
