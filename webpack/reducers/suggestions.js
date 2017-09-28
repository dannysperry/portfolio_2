import { suggestionsFromName, isPresent } from '../data/Pieces'

const initialState = suggestionsFromName('init')

const suggestions = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_MESSAGE': {
      return suggestionsFromName(action.text)
    }
    default: {
      return state
    }
  }
}

export default suggestions