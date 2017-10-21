import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ReactMarkdown from 'react-markdown'
import scrollToComponent from 'react-scroll-to-component'

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      waiting: true
    }
  }

  componentDidUpdate() {
    scrollToComponent(this.message)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        waiting: false
      })
    }, this.props.waitTime)

    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, this.props.loadTime)
    scrollToComponent(this.message)
  }

  render() {
    var response = null
    if (this.state.waiting) return response
    if (this.state.loading) {
      response = <div className="chat_bubble">
            <span className="one">.</span>
            <span className="two">.</span>
            <span className="three">.</span>
          </div>
    } else {
      let className = ['chat_bubble']

      if (this.props.user === 'you') className.push('chat_bubble--response')
      response = <ReactMarkdown
          source={this.props.text}
          className={className.join(' ')}
        />
    }

    return (
      <li ref={(node) => this.message = node} key={this.props.id}>
        { response }
      </li>
    )
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Message