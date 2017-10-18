const links = [
  "- **gists** https://gist.github.com/dannysperry",
  "- **fullstack** https://github.com/dannysperry/react-rails5/tree/fresh-start",
  "- **backend** https://github.com/dannysperry/api-generators"
].join("\n") + "\n"

export default {
  id: 'code_examples',
  messages: [
    "He uses git and hosts his code on github.com. He used React to build me, and I'm hosted on Github Pages.",
    links,
    "Take a look through these links for some of his showcase examples of code."
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