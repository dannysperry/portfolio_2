import { combineReducers } from 'redux'

import messages from './messages'
import suggestions from './suggestions'
import loadingMessages from './loadingMessages'

const chatApp = combineReducers({
  messages,
  suggestions,
  loadingMessages
})

export default chatApp