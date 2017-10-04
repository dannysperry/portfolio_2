const loadingMessages = (state = false, action) => {
  switch (action.type) {
    case 'TURN_OFF_LOADER': {
      console.log('turn off loader reducer')
      return false
    }
    case 'SUBMIT_MESSAGE': {
      return true
    }
    default: {
      return state
    }
  }
}

export default loadingMessages