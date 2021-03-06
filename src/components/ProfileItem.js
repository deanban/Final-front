import React, { Component } from 'react'
import { Grid, Accordion, Icon, Divider } from 'semantic-ui-react'
// import AnswerForm from './AnswerForm'

export default class ProfileItem extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    console.log("ProfileItem", this.props)

    return (
      <Accordion styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          {this.props.aprops.map}
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
    )
  }
}
