import { messagesFromName, isPresent } from '../data/Pieces'

const getYouMessage = (text) => {
  return [{
    text: text,
    user: 'you',
    completed: false
  }]
}

const getMeMessages = (messageName) => {
  console.log(messageName)
  var messages = messagesFromName(messageName)

  if (messages.length > 0) {
    messages = messages.map(message => ({
      text: message,
      user: 'me',
      completed: false
    }))
  }
  console.log(messages)
  return messages
}

const updateState = (state, messageName) => {
  var newState = [...state]
  console.log(isPresent(messageName))
  if (isPresent(messageName)) {
    newState = [
      ...state,
      ...getYouMessage(messageName),
      ...getMeMessages(messageName)
    ].filter((msg) => msg !== undefined)
  }
  console.log(newState)
  return newState
}

const messages = (state = getMeMessages('init'), action) => {
  var newState = state
  switch (action.type) {
    case 'SUBMIT_MESSAGE':
      newState = updateState(state, action.text)
    default:
      newState = state
  }
  return newState
}

export default messages