let nextTodoId = 0

export const submitMessage = text => ({
  type: 'SUBMIT_MESSAGE',
  id: nextTodoId++,
  text
})