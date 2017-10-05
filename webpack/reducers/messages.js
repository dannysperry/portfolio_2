import { messagesFromName, isPresent } from '../data/Pieces'

var id = 0
const getYouMessage = text => {
  return {
    text: text,
    user: 'you',
    id: id++
  }
}

const getMeMessage = text => ({
  text: text,
  user: 'me',
  id: id++
})

const getMeMessages = (id) => {
  let messages = messagesFromName(id)
  messages = messages.map(message => getMeMessage(message))
  return messages
}

const messages = (state = [], action) => {
    switch(action.type) {
      case 'SUBMIT_MESSAGE':
        return [...state, getYouMessage(action.text), ...getMeMessages(action.action)]
      default:
        return state
    }
}

export default messages