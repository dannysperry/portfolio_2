
const fullstackMessages = [
  "Before building the fullstack example, Daniel had about 6 months of experience with Angular 1.2 - 1.6 from his time with Metova. After Metova, he took interest in yarn, webpack, and React.",
  "The fullstack example is a starter template for future Rails & React based apps that uses React Router and server side rendering."
]

const backendMessages = [
  "All multi-platform apps need a central API. Daniel has build multiple api's with Metova that used an in house gem to document them.",
  "Daniel was building a JSON api in Rails and needed it to be documented for it's users while also maintaining high test coverage.",
  "The generators inside the app were continually updated to accomodate building REST resources that contain test coverage as well as the necessary documentation for a JSON APIs quickly."
]

export default {
    id: 'code_examples--more',
    messages: [
      "I have a short description of each Github example available.",
      ...fullstackMessages,
      ...backendMessages,
      "Would you like to get ahold of him to find out more?"
    ],
    suggestions: [
      {
        text: "Message him for me.",
        action: 'contact'
      },
      {
        text: "No thank you.",
        action: "end"
      }
    ]
  }

