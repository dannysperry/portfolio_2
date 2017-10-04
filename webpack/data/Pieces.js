// conversation pieces
// * name: 'a unique name',
//   message: 'a message to tell you about this action',
//   suggestions: ["another conversation piece's name attribute", "some other conversation piece's name attribute"]
//
// After a piece is called, it will return the message and then call each piece in the suggestions array.


// conversation piece
const arrayOfPieces = [
  {
    name: '',
    id: 'init',
    messages: [
      "Hi there!",
      "I'm Daniel Sperry's chat bot.",
      "I can tell you a bit about him personally and professionally.",
      "What would you like to know about him?"
    ],
    suggestions: [
      {
        text: "I'd like to hear more about him.",
        action: 'about'
      },
      {
        text: "I already know him and would like to message him.",
        action: 'contact'
      }
    ]
  },
  {
    name: "I'd like to hear more about him.",
    id: 'about',
    messages: [
      "A 29 year old male human. Approximately 6ft tall and 150lbs.",
      "He easily befriends people and is eager to lend a helping hand.",
      "Don't tell him I told you this, but if you really want him to do a good job, just make him think you need him, he always pulls through for the team in those situations.",
      "That's a little bit about him personally. Would you like to see his resume or look through some code examples he's prepared?"
    ],
    suggestions: [
      {
        text: 'Can I see his resume please?',
        action: 'resume'
      },
      {
        text: 'Lets take a look at some code.',
        action: 'code_examples'
      }
    ]
  },
  {
    name: 'resume',
    id: 'resume',
    messages: [
      "No problem at all! Here you go.",
      ""

    ],
    suggestions: [
      {
        text: 'contact me',
        action: 'contact'
      }
    ]
  },

  {
    name: 'code_examples',
    id: 'code_examples',
    messages: [
      'Would you like to see the short or long version of his code examples?'
    ],
    suggestions: [
      {
        text: "Short sounds good.",
        action: 'code_examples--short'
      },
      {
        text: "I'd prefer more.",
        action: 'code_examples--long'
      }
    ]
  },

  {
    name: 'code_examples--short',
    id: 'code_examples--short',
    messages: [
      'Take a look at his [Gists](http://https://gist.github.com/dannysperry), an [example](https://github.com/dannysperry/api-generators) with generators that document and build json api resources in rails, or this [example](https://github.com/dannysperry/react-rails5/tree/fresh-start) that replaces the asset pipeline for webpack in Rails 5.1 & React'
    ],
    suggestions: []
  },

  {
    name: 'code_examples--long',
    id: 'code_examples--long',
    messages: [
      'Would you like to talk about the Gist examples or one of the two Github examples?'
    ],
    suggestions: [
      {
        text: 'Gist examples',
        action: 'code_examples--long--gists'
      }, {
        text: 'Github Examples',
        action: 'code_examples--long--github'
      }
    ]
  },

  {
    name: 'code_examples--long--gists',
    id: 'code_examples--long--gists',
    messages: [
      ''
    ],
    suggestions: []
  },

  {
    name: 'code_examples--long--github',
    id: 'code_examples--long--github',
    messages: [
      'I have two github examples. Would you like to see a full-stack example or a back-end json api example?',
    ],
    suggestions: [
      {
        text: 'Full stack example',
        action: 'code_examples--long--github--fullstack'
      }, {
        text: 'Back-end JSON Api example',
        action: 'code_examples--long--github--backend'
      }
    ]
  },

  {
    name: 'code_examples--long--github--fullstack',
    id: 'code_examples--long--github--fullstack',
    messages: [
      '[Rails 5.1 & ReactJS example](https://github.com/dannysperry/react-rails5/tree/fresh-start)',
    ],
    suggestions: []
  },

  {
    name: 'code_examples--long--github--backend',
    id: 'code_examples--long--github--backend',
    messages: [
      '[Api generator example](https://github.com/dannysperry/api-generators)'
    ],
    suggestions: []
  },

  {
    name: 'contact',
    id: 'contact',
    messages: [
      "If you'd like I can text him a message. Type something and I'll make sure it's what you want to send."
    ],
    suggestions: []
  }
]

// Returns a Piece or NULL
const findById = id => {
  return arrayOfPieces.find(piece => piece.id === id)
}

const getNameById = id => {
  const piece = findById(id)
  if (typeof(piece) !== 'undefined') {
    return piece.name
  } else {
    return id
  }
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
  const arrayOfPiecesByNames = arrayOfPieces.map(piece => piece.id)
  return arrayOfPiecesByNames.includes(id)
}

export default arrayOfPieces

export { getNameById, messagesFromName, suggestionsFromName, isPresent }