import { messagesFromName, isPresent } from '../data/Pieces'

const getYouMessage = (text) => ({
  text: text,
  user: 'you',
  completed: false
})

const getMeMessage = (text) => ({
  text: text,
  user: 'me',
  completed: false
})

const getMeMessages = (messageName) => {
  var messages = messagesFromName(messageName)
  messages = messages.map(message => getMeMessage(message))
  return messages
}

const messages = (state = [], action) => {
    switch(action.type) {
      case 'SUBMIT_MESSAGE':
        return [...state, getYouMessage(action.text), ...getMeMessages(action.text)]
      default:
        return state
    }
}

export default messages