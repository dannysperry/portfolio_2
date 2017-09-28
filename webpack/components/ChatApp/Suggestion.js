import React from 'react'
import PropTypes from 'prop-types'

const Suggestion = ({ onClick, text, id, value }) => (
  <li className='Suggestion' key={id} id={id} value={value} onClick={onClick}>
    { text }
  </li>
)

Suggestion.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Suggestion