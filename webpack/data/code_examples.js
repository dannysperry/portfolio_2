const links = [
  "- **gists** https://gist.github.com/dannysperry",
  "- **fullstack** https://github.com/dannysperry/react-rails5/tree/fresh-start",
  "- **backend** https://github.com/dannysperry/api-generators"
].join("\n") + "\n"

export default {
  id: 'code_examples',
  messages: [
    "Mr. Sperry has Gists and Github repository examples to show you.",
    links
  ],
  suggestions: [
    {
      text: "Can you tell me more about these?",
      action: 'code_examples--more'
    },
    {
      text: "What about his work experience again?",
      action: 'experience'
    }
  ]
}