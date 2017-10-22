import React from 'react'

import {
  Button,
  Header,
  Icon,
  Modal,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from 'semantic-ui-react'

class AnswerForm extends React.Component {

  state = {
    title: "",
    userid: this.props.userid,
    questionid: this.props.questionid,
    modalOpen: false
  }

  handleOpen = () => this.setState({modalOpen: true})

  // handleClose = () => this.setState({ modalOpen: false })

  handleSubmit = (event) => {
    console.log(this.props)
    event.preventDefault()
    console.log("clicked")
    let body = {
      title: event.target.parentElement.firstChild.childNodes[0].childNodes[1].value,
      user_id: this.state.userid,
      question_id: this.state.questionid
    }
    body = JSON.stringify(body)
    fetch('http://localhost:3000/api/v1/answers', {
      method: 'post',
      body: body,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(() => this.setState({modalOpen: false}))
    // .then(json => this.props.history.push('/home'))
  }

  handleChange = (event) => {

    this.setState({body: event.target.value})
  }

  render()
  {

    return (
      <Modal trigger={< Button onClick = {
        this.handleOpen
      }
      basic color = 'black' > Post Answer < /Button>} open={this.state.modalOpen} onClose={this.handleClose} basic size='long'>
        <Header icon='browser' content='Your Answer'/>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>

            <Form.Field control={TextArea} onChange={this.handleChange} name='answer' label="Your answer" value={this.state.body}/>
            <Form.Button inverted content='Submit'/>
          </Form>
        </Modal.Content>
      </Modal>

    )
  }

}

export default AnswerForm
