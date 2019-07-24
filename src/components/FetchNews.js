import React from 'react'
import RenderNews from './RenderNews'
import {Card} from 'semantic-ui-react'

export default class FetchNews extends React.Component {

  constructor() {

    super()

    this.state = {
      data: []
    }
  }

  componentDidMount() {

    // const headers = {
    // 	method: 'GET',
    // 	mode: 'no-cors'
    // }

    fetch('https://api.cognitive.microsoft.com/bing/v5.0/news/trendingtopics', {
      method: 'get',
      headers: {
        'Ocp-Apim-Subscription-Key': 'aa72be0dbf9949cfaf8b646e65c56603',
        "Content-Type": "application/json"
      }
    }).then(resp => resp.json()).then(respJson => {
      this.setState({data: respJson.value})
    })
  }

  render() {
    console.log("news", this.state.data)
    return (
      <Card.Group itemsPerRow={5}>
        {this.state.data.map(item => <RenderNews name={item.name} image={item.image.url} url={item.webSearchUrl}/>)}
      </Card.Group>
    )
  }

}
