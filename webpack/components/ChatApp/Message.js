import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hidden: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hidden: false
      })
    }, this.props.load)

    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, this.props.delay)
  }

  render() {
    if (this.state.hidden) return null
    if (this.state.loading) {
      return (
        <li key={this.props.id}>
          <div className="chat_bubble">
            <span className="one">.</span>
            <span className="two">.</span>
            <span className="three">.</span>
          </div>
        </li>
      )
    } else {
      let className = ['chat_bubble']

      if (this.props.user === 'you') className.push('chat_bubble--response')
      return (
        <li key={this.props.id}>
          <ReactMarkdown
            source={this.props.text}
            className={className.join(' ')}
          />
        </li>
      )
    }
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Message