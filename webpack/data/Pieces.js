
// conversation pieces
// * name: 'a unique name',
//   message: 'a message to tell you about this action',
//   suggestions: ["another conversation piece's name attribute", "some other conversation piece's name attribute"]
//
// After a piece is called, it will return the message and then call each piece in the suggestions array.
import init from './init'
import about from './about'
import contact from './contact'
import code_examples from './code_examples'
import code_examples_more from './code_examples_more'
import experience from './experience'


const fullstackMessages = [
  "Mr. Sperry aquired 6 months of experience with AngularJS 1.2 - 1.6 while with Metova.",
  "He expanded his JS skills with yarn, Webpack, & ReactJS",
  "The fullstack example is a starter template for future Rails & React based apps that uses the latest versino of React Router"
]

const backendMessages = [
  "Mr. Sperry enjoys web development both analytically and artistically.",
  "Daniel was building a JSON api in Rails while eventually coming up with a json api template out of it.",
  "The generators inside the app were continually updated to accomodate quick REST resources that contain test coverage as well as the necessary documentation for a JSON apis."
]

// conversation piece
const Pieces = [
  init,
  about,
  contact,
  code_examples,
  code_examples_more,
  experience
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