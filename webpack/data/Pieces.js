
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
      "I'm Daniel Sperry's chat bot. It's my primary role to help you get to know him.",
      "Please select a suggested response or feel free to ask me to contact Daniel directly for you and I will get back to you with his reply shortly."
    ],
    suggestions: [
      {
        text: "I'd like to hear more about him and his work experience.",
        action: 'about'
      },
      {
        text: "I already know him and would like you to message him.",
        action: 'contact'
      }
    ]
  },
  {
    name: "I'd like to hear more about him and his work experience.",
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
    name: 'Can I see his resume please?',
    id: 'resume',
    messages: [
      "No problem at all! Here you go.",
      "<a download='http://www.dsperry.com/resume.pdf' href='http://dsperry.com/resume.pdf' title='resume'><img src='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwiliYCojtjWAhVI42MKHekwCDwQjRwIBw&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AOOjs_UI_icon_download-ltr.svg&psig=AOvVaw1Un_0UZmwdupvivVdUPK-r&ust=1507245799960591' /></a>",
      "Would you like to take a look at code examples now or get ahold of him?"
    ],
    suggestions: [
      {
        text: 'Can you send him a message for me?',
        action: 'contact'
      },
      {
        text: "Let's take a look at some code.",
        action: 'code_examples'
      }
    ]
  },

  {
    name: "Let's take a look at some code.",
    id: 'code_examples',
    messages: [
      "Daniel has a short list of Gists and Github Repo's. "
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