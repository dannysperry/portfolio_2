import React from 'react'
import { render } from 'react-dom'

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import App from './components/index'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)