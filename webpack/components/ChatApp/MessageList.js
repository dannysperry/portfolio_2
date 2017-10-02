import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { toggleMessage } from '../../actions'

import Message from './Message'


const MessageList = ({ messages, messageHandler }) => {
  var messageComponents = messages.map(message => <Message key={message.id} {...message} />)

  var message = messages.find(m => m.completed === false)
  if (message) {
    setTimeout(function() {
      messageHandler(message.id)
    }.bind(this), 2000)
  }

  return (
    <ol className="MessageList">
      { messageComponents }
    </ol>
  )
}

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = (dispatch) => ({
  messageHandler: (id) => {
    console.log(id)
    return dispatch(toggleMessage(id))
  }
})

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  messageHandler: PropTypes.func.isRequired
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList)