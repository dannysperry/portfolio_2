import React, { Component, cloneElement, Children } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { toggleMessages } from '../../actions'

import Message from './Message'


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastMessageId: 0
    }
  }
  render() {
    this.setState({
      lastMessageId: this.props.messages[this.props.messages.length - 1].id
    })
    var delay = 0
    let delayStart = 0
    const messageListChildren = this.props.messages.map(message => {
      if (message.id > this.state.lastMessageId) {
        delayStart = delay + 750
        delay = delayStart + ((message.text.length/30)*1000)
      }
      return <Message key={message.id} delay={delay} load={delayStart} {...message} />
    })


    return (
      <ol className="MessageList">
        { messageListChildren }
      </ol>
    )
  }
}

const mapStateToProps = state => {

  return {
    messages: state.messages.filter(message => message.id !== 0)
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.objectOf(Message)).isRequired
}



export default connect(
  mapStateToProps
)(MessageList)