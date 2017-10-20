
const fullstackMessages = [
  "Before building the fullstack example, Daniel had about 6 months of professional experience with Angular from his time with Metova. After Metova, he took a personal interest in yarn, webpack, and React.",
  "The fullstack example is a starter template for future Rails & React based apps that uses React Router and server side rendering on Rails 5.1."
]

const backendMessages = [
  "Diving more into React caused him to look into building JSON api's for React Native apps.",
  "He'd built multiple api's with Metova that used an in house gem for documentation.",
  "He was building a JSON api in Rails and needed it to be documented like metova had done while also maintaining high test coverage.",
  "The generators inside the app were continually updated to accomodate building REST resources that contain test coverage as well as the necessary documentation for a JSON api to be setup and built quickly."
]

export default {
    id: 'code_examples--more',
    messages: [
      "Sure!",
      ...fullstackMessages,
      ...backendMessages,
      "So that's all I have for that.",
      "Would you like to get ahold of him now?"
    ],
    suggestions: [
      {
        text: "I'd like to message him.",
        action: 'contact'
      },
      {
        text: "No thank you. Tell me about his work experience though.",
        action: "experience"
      }
    ]
  }

