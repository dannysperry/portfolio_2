import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '...'
    }
  }
  componentDidMount() {
    setTimeout(function() {
      this.setState({
        text: this.props.text
      })
    }.bind(this), 1500)
  }

  render() {
    const className = ['chat_bubble']

    if (this.props.user === 'me') {
      className.push('chat_bubble--slideIn')
      className.push('chat_bubble--fade')
    } else if (this.props.user === 'you') {
      className.push('chat_bubble--response')
    }

    return (
      <li key={this.props.id}>
        <div className={className.join(' ')}>
          { this.state.text }
        </div>
      </li>
    )
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}

export default Message