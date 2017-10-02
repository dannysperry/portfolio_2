let nextTodoId = 0

export const submitMessage = (text) => ({
  type: 'SUBMIT_MESSAGE',
  id: nextTodoId++,
  text
})

export const toggleMessage = id => {
  return {
    type: 'TOGGLE_MESSAGE',
    id
  }
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})


