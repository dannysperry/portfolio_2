
const fullstackMessages = [
  "Mr. Sperry has about 6 months of experience with AngularJS 1.2 - 1.6 while with Metova. After leaving he worked with yarn, webpack, and React on his own time.",
  "The fullstack example is a starter template for future Rails & React based apps that uses React Router and server side rendering."
]

const backendMessages = [
  "Mr. Sperry enjoys web development both mathmatically and artistically.",
  "Daniel was building a JSON api in Rails while eventually coming up with a json api template out of it.",
  "The generators inside the app were continually updated to accomodate quick REST resources that contain test coverage as well as the necessary documentation for a JSON apis."
]

export default {
    id: 'code_examples--more',
    messages: [
      ...fullstackMessages,
      ...backendMessages,
      "He can tell you more if you'd like. Do you want to get ahold of him?"
    ],
    suggestions: [
      {
        text: "Message him for me.",
        action: 'contact'
      }
    ]
  }

