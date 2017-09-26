import React from 'react'
import { render } from 'react-dom'

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import ChatApp from './components/ChatApp'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <ChatApp />
  </Provider>,
  document.getElementById('app')
)