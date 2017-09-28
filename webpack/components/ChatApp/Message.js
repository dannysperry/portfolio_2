import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ text, user, id, completed }) => {
  const className = ['chat_bubble']
  if (user) { className.push(`${user}_message`) }
  if (completed) { className.push('show') }

  return (
    <li key={id} className={className.join(' ')}>
      { text }
    </li>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}

export default Message