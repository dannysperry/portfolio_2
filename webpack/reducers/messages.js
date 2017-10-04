import { messagesFromName, getNameById, isPresent } from '../data/Pieces'

var id = 0
const getYouMessage = text => {
  const displayText = getNameById(text)
  return {
    text: displayText,
    user: 'you',
    id: id++
  }
}

const getMeMessage = text => ({
  text: text,
  user: 'me',
  id: id++
})

const getMeMessages = (messageName) => {
  let messages = messagesFromName(messageName)
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