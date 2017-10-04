import React, { Component, cloneElement, Children } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { toggleMessages } from '../../actions'

import Message from './Message'


class MessageList extends Component {
  render() {
    const messageListChildren = this.props.messages

    return (
      <ol className="MessageList">
        { messageListChildren }
      </ol>
    )
  }
}

const mapStateToProps = state => {
  var delay = 0
  return {
    messages: state.messages.filter(message => message.id !== 0).map(message => {
      const delayStart = delay + 750
      delay = delayStart + ((message.text.length/15)*1000)
      return <Message key={message.id} delay={delay} load={delayStart} {...message} />
    })
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.objectOf(Message)).isRequired
}



export default connect(
  mapStateToProps
)(MessageList)