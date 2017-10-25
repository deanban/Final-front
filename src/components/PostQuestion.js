import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Dropdown } from 'semantic-ui-react'
import { postQuestions } from '../actions/questions'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { fetchCategories } from '../actions/categories'
import { fetchTags } from '../actions/tags'


// const options = [
//   { key: 'angular', text: 'Angular', value: 'angular' },
//   { key: 'css', text: 'CSS', value: 'css' },
//   { key: 'design', text: 'Graphic Design', value: 'design' },
//   { key: 'ember', text: 'Ember', value: 'ember' },
//   { key: 'html', text: 'HTML', value: 'html' },
//   { key: 'ia', text: 'Information Architecture', value: 'ia' },
//   { key: 'javascript', text: 'Javascript', value: 'javascript' },
//   { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
//   { key: 'meteor', text: 'Meteor', value: 'meteor' },
//   { key: 'node', text: 'NodeJS', value: 'node' },
//   { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
//   { key: 'python', text: 'Python', value: 'python' },
//   { key: 'rails', text: 'Rails', value: 'rails' },
//   { key: 'react', text: 'React', value: 'react' },
//   { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
//   { key: 'ruby', text: 'Ruby', value: 'ruby' },
//   { key: 'ui', text: 'UI Design', value: 'ui' },
//   { key: 'ux', text: 'User Experience', value: 'ux' },
// ]
// console.log("postprops", this.props)

class PostQuestion extends Component {

  state = {
    title: '',
    categoryid: [],
    tagName: []
  }

  componentDidMount(){
  		this.props.fetchCategories()
  		this.props.fetchTags()
	}

  tagOptions = this.props.tags.map(option => {
    return {
      key: option.name,
      text: option.name,
      value: option.name
    }
  })

  categoryOptions = this.props.categories.map(option => {
    return {
      key: option.id,
      text: option.name,
      value: option.name
    }
  })


  handleTagChange = (e, { value }) => this.setState({tagName: value})
  // handleTagChange = (event) =>{
  //   this.setState({
  //     tagName: event.value
  //   })
  // }

  // handleCategoryChange = (e, { id }) => this.setState({ categoryid: id })

  handleCategoryChange = (event) => {
    this.setState({
      categoryid: parseInt(event._targetInst._debugOwner.key)
    })
  }

  handleBodyChange = (e, { value }) => this.setState({ title: value })

  handleSubmit = (event) => {
    console.log("body", this.state.title)
    console.log("categoryid", this.state.categoryid)
    console.log("tagName", this.state.tagName)
    console.log("tagName", this.props.user.id)
    event.preventDefault()
    this.props.postQuestions(this.state.title, this.props.user.id, this.state.categoryid, this.state.tagName)
      // .then((token) => {
      //
      //   console.log("postQuestions", this.props)
      //   this.props.history.push('/home')
      // })


  }

  render() {
    // const { tagName } = this.state
    console.log("post", this.props)
    console.log("tagoptions", this.tagOptions)
    console.log("categoryOptions", this.props.categories.categoriesList)
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group required widths='equal'>
          <Dropdown onChange={this.handleCategoryChange} placeholder='Select Category' fluid search selection options={this.categoryOptions} />
          <Dropdown onChange={this.handleTagChange} placeholder='Tags' fluid multiple search selection options={this.tagOptions} />

        </Form.Group>
        <Form.Field onChange={this.handleBodyChange} required control={TextArea} label='Post Question' placeholder='Ask your burning question...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' required/>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions.questionslist,
    user:state.users,
    categories:state.categories.categoriesList,
    tags:state.tags.tagsList
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(QuestionActions, dispatch)
// }

function mapDispatchToProps(dispatch) {
  return {
    postQuestions: (title, userid, categoryid, tagname) =>{
      dispatch(postQuestions(title, userid, categoryid, tagname))
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


export default connect(mapStateToProps, mapDispatchToProps) (PostQuestion)
