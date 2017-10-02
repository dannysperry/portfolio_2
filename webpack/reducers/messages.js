import { messagesFromName, isPresent } from '../data/Pieces'

var id = 0
const getYouMessage = (text) => ({
  text: text,
  user: 'you',
  completed: false,
  id: id++
})

const getMeMessage = (text) => ({
  text: text,
  user: 'me',
  completed: false,
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
      case 'TOGGLE_MESSAGE':
        return state.map( (message) => {
          if(message.id !== action.id) { return message }

          return {
            ...message,
            completed: true
          }
        })
      default:
        return state
    }
}

export default messages