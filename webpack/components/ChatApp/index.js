import React from 'react'

import MessageList from './MessageList'
import SuggestionList from './SuggestionList'


const ChatApp = () => {
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

export default ChatApp
