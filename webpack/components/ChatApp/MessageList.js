import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { submitMessage } from '../../actions'

import Message from './Message'


const MessageList = ({ messages }) => {
  return (
    <ul className="MessageList">
      { messages.map((message, i) => {
        return <Message
          key={i}
          id={i}
          {...message} />
      })}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default connect(
  mapStateToProps
)(MessageList)