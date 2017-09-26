import { suggestionsFromName, isPresent } from '../data/Pieces'

const initialState = suggestionsFromName('init')

const suggestions = (state = initialState, action) => {
  var tmpState = state
  switch (action.type) {
    case 'SUBMIT_MESSAGE': {
      tmpState = suggestionsFromName(action.text)
    }
    default: {
      tmpState = state
    }
  }
  return tmpState
}

export default suggestions