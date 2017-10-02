import React, { Component } from 'react'

import MessageList from './MessageList'
import SuggestionList from './SuggestionList'

import { connect } from 'react-redux'
import { submitMessage } from '../../actions'


class ChatApp extends Component {
  componentWillMount() {
    this.props.initHandler()
  }

  render() {
    return(
      <div id="chatApp" className="ChatApp">
        <div className="ChatApp--overflow">
          <div className="ChatApp--container">
            <MessageList />
            <SuggestionList />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  initHandler: () => {
    dispatch(submitMessage('init'))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(ChatApp)
