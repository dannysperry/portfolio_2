// conversation pieces
// * name: 'a unique name',
//   message: 'a message to tell you about this action',
//   suggestions: ["another conversation piece's name attribute", "some other conversation piece's name attribute"]
//
// After a piece is called, it will return the message and then call each piece in the suggestions array.


// conversation piece
const arrayOfPieces = [
  {
    name: 'init',
    messages: [
      "Hi there!",
      "I'm Daniel Sperry's chat assitant. I was built to help you get to know him more.",
      "I have authorization to discuss his personality, work behavoirs, resume, and code examples.",
      "You can send him a direct message here if you have any other questions."
    ],
    suggestions: [
      {
        text: 'Wanna About?',
        action: 'about'
      },
      {
        text: 'Wanna Resume?',
        action: 'resume'
      },
      {
        text: 'Wanna Code Examples?',
        action: 'code_examples'
      },
      {
        text: 'Wanna Contact Him?',
        action: 'contact'
      }
    ]
  },
  {
    name: 'about',
    messages: [
      'Here is an about messages though bro',
      'Dive into my personality now'
    ]
  },

  {
    name: 'resume',
    messages: [
      'Heres a link to my resume, wanna contact me'
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
    messages: [
      'Take a look at his [Gists](http://https://gist.github.com/dannysperry), an [example](https://github.com/dannysperry/api-generators) with generators that document and build json api resources in rails, or this [example](https://github.com/dannysperry/react-rails5/tree/fresh-start) that replaces the asset pipeline for webpack in Rails 5.1 & React'
    ]
  },

  {
    name: 'code_examples--long',
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
    messages: [
      ''
    ],
    suggestions: []
  },

  {
    name: 'code_examples--long--github',
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
    messages: [
      '[Rails 5.1 & ReactJS example](https://github.com/dannysperry/react-rails5/tree/fresh-start)',
    ]
  },

  {
    name: 'code_examples--long--github--backend',
    messages: [
      '[Api generator example](https://github.com/dannysperry/api-generators)'
    ]
  },

  {
    name: 'contact',
    messages: [
      "If you'd like I can text him a message. Type something and I'll make sure it's what you want to send."
    ],
    suggestions: [
      {}
    ]
  }
]

// Returns a Piece or NULL
const findByName = (name) => {
  for (const piece of arrayOfPieces) {
    if (piece.name !== name) { return null }
    return piece
  }
}

// Returns an ARRAY
const messagesFromName = (name) => {
  const piece = findByName(name)
  if (piece !== null) {
    return piece.messages
  } else {
    return []
  }
}

// Returns an ARRAY
const suggestionsFromName = (name) => {
  const piece = findByName(name)
  if (piece !== null) {
    return piece.suggestions
  } else {
    return []
  }
}

// Returns a BOOL
const isPresent = (name) => {
  const arrayOfPiecesByNames = arrayOfPieces.map(piece => piece.name)
  return arrayOfPiecesByNames.includes(name)
}

export default arrayOfPieces

export { findByName, messagesFromName, suggestionsFromName, isPresent }