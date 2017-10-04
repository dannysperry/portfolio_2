import React, { Component, cloneElement, Children } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { toggleMessageLoader } from '../../actions'

import Message from './Message'


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastMessageId: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      lastMessageId: this.props.messages[this.props.messages.length - 1].id
    })
  }

  render() {
    let delay = 0
    let delayStart = 0
    const messageListChildren = this.props.messages.map(message => {
      if (message.user === "you") return <Message key={message.id} loadTime={0} waitTime={0} {...message} />

      if (message.id > this.state.lastMessageId) {
        delayStart = delay + 750
        delay = delayStart + ((message.text.length/30)*1000)
      }
      return <Message key={message.id} loadTime={delay} waitTime={delayStart} {...message} />
    })

    setTimeout(() => {
      this.props.turnOffLoader()
    }, delay)

    return (
      <ol className="MessageList">
        { messageListChildren }
      </ol>
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages.filter(message => message.id !== 0)
})

const mapDispatchToProps = (dispatch) => ({
  turnOffLoader: () => {
    dispatch(toggleMessageLoader())
  }
})

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.objectOf(Message)).isRequired
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList)