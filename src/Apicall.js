import React, { Component } from 'react'
import axios from 'axios'

//https://www.reddit.com/r/space.json
export default class Apicall extends Component {
  componentWillMount() {
    this.getReddit()
    // this.setState({ message: 'This is an updated message' })
  }

  getReddit() {
    axios
      .get(`https://www.reddit.com/r/${this.state.subr}.json`)
      .then((res) => {
        const posts = res.data.data.children.map((obj) => obj.data)
        this.setState({ posts })
      })
  }
  constructor(props) {
    super(props)

    this.state = {
      // message: 'This is initial message',
      posts: [],
      subr: 'space',
    }
    this.getReddit = this.getReddit.bind(this)
  }
  render() {
    return (
      <div>
        <p>
          {' '}
          I am a APi call using Redit app from
          https://www.reddit.com/r/space.json{' '}
        </p>
        <p>
          <h1>{`/r/${this.state.subr}`}</h1>
        </p>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}
