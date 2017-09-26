import React from 'react'
import PropTypes from 'prop-types'

const buildMessageClassName = (user) => {
  var className = 'chat_bubble'
  if (user.length > 0) {
    className = `chat_bubble ${user}_message`
  }

  return className
}

const Message = ({ text, user, id }) => {
  const className = buildMessageClassName(user)
  return (
    <li key={id} className={className}>
      {text}
    </li>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Message