import React from 'react'

import { Button, Modal, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'


class AnswerForm extends React.Component{

	state = {
		title:"",
		userid:this.props.userid,
		questionid:this.props.questionid
	}

	handleSubmit = (event) => {
		console.log(this.props)
		event.preventDefault()
		console.log("clicked")
		let body = {title: event.target.parentElement.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].value, 
						user_id: this.state.userid,
						question_id: this.state.questionid}
		body = JSON.stringify(body)
		fetch('http://localhost:3000/api/v1/answers', {
			method: 'post',
			body: body,
			headers:{
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
			
		})
		.then(res => res.json())
		// .then(json => this.props.history.push('/home'))
		
		


	}

	handleChange = (event) =>{
		
		this.setState({
			body: event.target.value
		})
	}

	render()
	{

		return(
			<Modal trigger={<Button basic color='black'>Post Answer</Button>}>
			  <Modal.Header>
                  Add An Answer
              </Modal.Header>
              <Modal.Content>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <Form.Input onChange={this.handleChange} type='TextArea' name='answer' label="Your answer" value={this.state.body}/>
                  </Form.Field>
                  <Form.Button content='Submit' />
                </Form>
              </Modal.Content>
  			</Modal>

			)
	}

}

export default AnswerForm
