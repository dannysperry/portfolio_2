
// conversation pieces
// * name: 'a unique name',
//   message: 'a message to tell you about this action',
//   suggestions: ["another conversation piece's name attribute", "some other conversation piece's name attribute"]
//
// After a piece is called, it will return the message and then call each piece in the suggestions array.
import init from './init'
import about from './about'
import contact from './contact'
import contact_complete from './contact_complete'
import code_examples from './code_examples'
import code_examples_more from './code_examples_more'
import experience from './experience'
import end from './end'

// conversation piece
const Pieces = [
  init,
  about,
  contact,
  contact_complete,
  code_examples,
  code_examples_more,
  experience,
  end
]

// Returns a Piece or NULL
const findById = id => {
  return Pieces.find(piece => piece.id === id)
}

// Returns an ARRAY
const messagesFromName = id => {
  const piece = findById(id)
  if (typeof(piece) !== 'undefined') {
    return piece.messages
  } else {
    return []
  }
}

// Returns an ARRAY
const suggestionsFromName = id => {
  const piece = findById(id)
  if (typeof(piece) !== 'undefined') {
    return piece.suggestions
  } else {
    return []
  }
}

// Returns a BOOL
const isPresent = id => {
  const PiecesByNames = Pieces.map(piece => piece.id)
  return PiecesByNames.includes(id)
}

export default Pieces

export { messagesFromName, suggestionsFromName, isPresent }