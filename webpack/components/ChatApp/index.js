import React from 'react'

import MessageList from './MessageList'
import SuggestionForm from './SuggestionForm'


const ChatApp = () => {
  return(
    <div className="ChatApp">
      <MessageList />
      <SuggestionForm />
    </div>
  )
}

export default ChatApp
