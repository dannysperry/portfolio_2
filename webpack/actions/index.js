let nextTodoId = 0

export const submitMessage = (text, action) => ({
  type: 'SUBMIT_MESSAGE',
  id: nextTodoId++,
  text: text,
  action: action
})

export const toggleMessageLoader = () => ({
  type: 'TURN_OFF_LOADER'
})