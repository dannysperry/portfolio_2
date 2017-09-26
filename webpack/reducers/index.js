import { combineReducers } from 'redux'

import messages from './messages'
import suggestions from './suggestions'

const chatApp = combineReducers({
  messages,
  suggestions
})

export default chatApp