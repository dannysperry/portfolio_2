import React from 'react'
import PropTypes from 'prop-types'

import Suggestion from './Suggestion'


const SuggestionList = ({ suggestions, suggestionClickHandler, loadingMessages }) => {
  if (loadingMessages || !suggestions.length) return null
  return (
    <div className="SuggestionsList">
      { suggestions.map((suggestion, i) =>
        <Suggestion
          key={i}
          id={i}
          value={suggestion.action}
          onClick={suggestionClickHandler}
          { ...suggestion } />
      )}
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

