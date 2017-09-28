import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { submitMessage } from '../../actions'

import Message from './Message'


class MessageList extends Component {
  render() {
    var messageComponents = this.props.messages.map((message, i) => (
      <Message
        key={i}
        id={i}
        {...message} />
      )
    )
    return (
      <ul className="MessageList">
        { messageComponents }
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages
})

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default connect(
  mapStateToProps
)(MessageList)