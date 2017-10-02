import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '...'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      setTimeout(function() {
        this.setState({
          text: this.props.text
        })
      }.bind(this), 1500)
    }
  }

  render() {
    let className = ['chat_bubble']

    if (this.props.completed) {
      if (this.props.user === 'me') {
        className = [...className, 'chat_bubble--slideIn', 'chat_bubble--fade']
      } else if (this.props.user === 'you') {
        className = [...className, 'chat_bubble--response']
      }
    } else {
      className = [...className, 'incomplete']
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