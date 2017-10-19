import React from 'react'
import PropTypes from 'prop-types'

import Suggestion from './Suggestion'
import ContactForm from './ContactForm'


const SuggestionList = ({ suggestions, suggestionClickHandler, loadingMessages }) => {
  if (loadingMessages || !suggestions.length) return null


  var response = <ContactForm />

  if (suggestions[0].action !== 'init_contact') {
    response = suggestions.map((suggestion, i) =>
      <Suggestion
        key={i}
        id={i}
        value={suggestion.action}
        onClick={suggestionClickHandler}
        { ...suggestion } />
    )
  }

  return (
    <div className="SuggestionList">
      { response }
    </div>
  )
}

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
  }).isRequired).isRequired,
  suggestionClickHandler: PropTypes.func.isRequired,
  loadingMessages: PropTypes.bool.isRequired
}

export default SuggestionList

