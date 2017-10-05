import React, { Component } from 'react'

import MessageList from './MessageList'
import SuggestionList from './SuggestionList'

import { connect } from 'react-redux'
import { submitMessage, toggleMessageLoader } from '../../actions'


class ChatApp extends Component {
  render() {
    return(
      <section id="chatApp" className="ChatApp">
        <div className="ChatApp--overflow">
          <div className="ChatApp--container">
            <MessageList
              messages={this.props.messages}
              turnOffLoader={this.props.turnOffLoader}
              initHandler={this.props.initHandler} />
            <SuggestionList
              suggestions={this.props.suggestions}
              suggestionClickHandler={this.props.suggestionClickHandler}
              loadingMessages={this.props.loadingMessages} />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages.filter(message => message.id !== 0),
  suggestions: state.suggestions,
  loadingMessages: state.loadingMessages
})

const mapDispatchToProps = dispatch => ({
  turnOffLoader: () => {
    dispatch(toggleMessageLoader())
  },
  suggestionClickHandler: e => {
    dispatch(submitMessage(e.target.textContent, e.target.attributes.value.nodeValue))
  },
  initHandler: () => {
    dispatch(submitMessage('', 'init'))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatApp)
