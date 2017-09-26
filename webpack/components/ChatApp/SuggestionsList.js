import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { submitMessage } from '../../actions'

import Suggestion from './Suggestion'


const SuggestionList = ({ suggestions, suggestionClickHandler }) => {
  return (
    <ul className="SuggestionsList">
      { suggestions.map((suggestion, i) => {
        return <Suggestion
          key={i}
          id={i}
          value={suggestion.action}
          onClick={suggestionClickHandler}
          { ...suggestion } />
      })}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  suggestions: state.suggestions
})

const mapDispatchToProps = (dispatch, props) => ({
  suggestionClickHandler: (e) => {
    const text = e.target.attributes.value.nodeValue
    dispatch(submitMessage(text))
  }
})

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
  }).isRequired).isRequired,
  suggestionClickHandler: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestionList)

