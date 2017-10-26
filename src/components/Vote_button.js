import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Grid, Accordion, Icon, Divider, Button } from 'semantic-ui-react'

class Vote_button extends Component{

  state = {
    totalVotes: "",
    // answerxid: "",
    activeIndex: 0
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  // const count_votes = this.props.answers.filter((vote, id) => vote.total_votes === vote.id)

  handleLikeButton = (event) => {
    console.log("votecount", this.props)
    // this.setState({
    //   count: this.props.votecount + 1
    // })
    this.postVote()
  }

  // componentDidMount(){
  //   this.setState({
  //     totalVotes:this.props.total_votes
  //   })
  // }

  postVote(){
    let body = {
					user_id: this.props.user.id,
					answer_id: this.props.answerid,
					vote_count: 1
					}
		body = JSON.stringify(body)
		return fetch('http://localhost:3000/api/v1/votes', {
			method: 'post',
			body: body,
			headers:{
				"Accept": "application/json",
				"Content-Type": "application/json"
			}

		})
		.then(res => res.json())
		.then(json => {
      this.setState({
        totalVotes:json.total_votes,
        // answerid:json.answer_id
      })
    })

  }

  render(){
    const { activeIndex } = this.state
    // const count_votes = this.props.answers.filter((answer, id) => answer.total_votes === answer.id)
    console.log("vote", this.state.totalVotes)
    return(
      <Accordion.Content active={activeIndex === 0}>

            <Button
              onClick={this.handleLikeButton}
              basic
              color='black'
              icon='heart'
              labelPosition='right'
              label={{ basic: true, color: 'black', pointing: 'left', content: this.state.totalVotes ? this.state.totalVotes : 'Like'  }}
            />

      </Accordion.Content>
    )
  }
}

function mapStateToProps(store){
  console.log("Vote_button", store)
  return {
    user: store.users
  }
}

export default connect(mapStateToProps)(Vote_button)
