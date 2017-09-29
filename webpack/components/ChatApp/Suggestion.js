import React from 'react'
import PropTypes from 'prop-types'

const Suggestion = ({ onClick, text, id, value }) => {
  const classes = ['chat_bubble', 'chat_bubble--response', 'Suggestion']

  return (
    <div key={id} id={id} className={classes.join(' ')} value={value} onClick={onClick}>
      { text }
    </div>
  )
}

Suggestion.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Suggestion