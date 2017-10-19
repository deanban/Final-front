import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Dropdown } from 'semantic-ui-react'
import * as QuestionActions from '../actions/questions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]

// const categoryOptions = this.props.questions.categoriesList.map(option => option.name)

class PostQuestion extends Component {
  
  state = {
    title: '',
    userid: '',
    categoryid: '',
    tagName: []
  }



  handleTagChange = (e, { value }) => this.setState({ tagName: value })

  handleCategoryChange = (e, { value }) => this.setState({ categoryid: value })

  handleBodyChange = (e, { value }) => this.setState({ title: value })

  // handleSubmit = (event) => {
  //   // console.log("current user", this.props.currentUser)
  //   event.preventDefault()
  //   this.props.postQuestions(this.state.title, this.props.user.id, categoryid, tag)
  //     .then((token) => {
        
  //       console.log("postQuestions", this.props)
  //       this.props.router.history.push('/home')
  //     })


  // }

  render() {
    // const { tagName } = this.state
    console.log("post", this.state)
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group required widths='equal'>
          <Dropdown onChange={this.handleCategoryChange} placeholder='Select Category' fluid multiple search selection />
          <Dropdown onChange={this.handleTagChange} placeholder='Tags' fluid multiple search selection options={options} />

        </Form.Group>
        <Form.Field required control={TextArea} label='Post Question' placeholder='Ask your burning question...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' required/>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return {
    question: state.questions.questionslist,
    user:state.users,
    category:state.questions.categoriesList,
    tag:state.questions.tagsList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(QuestionActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (PostQuestion)


