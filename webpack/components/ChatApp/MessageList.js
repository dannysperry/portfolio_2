import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Message from './Message'

import VisibilitySensor from 'react-visibility-sensor'


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastMessageId: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.messages.length) {
      this.setState({
        lastMessageId: this.props.messages[this.props.messages.length - 1].id
      })
    }
  }

  render() {
    let delay = 0
    let delayStart = 0
    let active = true
    let messageListChildren = null
    if (this.props.messages.length) {
      active = false
      messageListChildren = this.props.messages.map(message => {
        if (message.user === "you") return <Message key={message.id} loadTime={0} waitTime={0} {...message} />

        if (message.id > this.state.lastMessageId) {
          delayStart = delay + 750
          delay = delayStart + ((message.text.length/40)*1000)
        }
        return <Message key={message.id} loadTime={delay} waitTime={delayStart} {...message} />
      })
    }

    setTimeout(() => {
      this.props.turnOffLoader()
    }, delay)



    const visibilityChange = (isVisible) => {
      active = false
      if (isVisible) {
        this.props.initHandler()
      }
    }

    return (
      <ol id="MessageList" className="MessageList">
        <VisibilitySensor active={active} onChange={visibilityChange} minTopValue={100} />
        { messageListChildren }
      </ol>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.objectOf(Message)).isRequired,
  turnOffLoader: PropTypes.func.isRequired,
  initHandler: PropTypes.func.isRequired
}

export default MessageList