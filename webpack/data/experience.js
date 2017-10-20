const fine = [
  "He developed an internally used rails engine as a gem that laid the foundation for FINE's Rails CMS framework.",
  "He setup a test environment with a legacy Rails 3 e-comm app.",
  "Eventually FINE promoted him because he is often assisting other developers."
]

const metova = [
  "At Metova he was both Web Developer and Project Lead on 2-3 person teams with 2 - 4 month retainers usually.",
  "He worked on a 10 dev team on an AngularJS contract that lasted almost a year.",
  "Agile story points, daily scrum meetings and weekly iteration meetings were apart of his project management and team lead responsibilities."
]

export default {
  id: 'experience',
  messages: [
    "As far as work experience goes, he started out as a 'junior ruby developer' at FINE Design Group in Portland, OR.",
    ...fine,
    "He wanted to work remotely full-time and eventually crossed paths with Metova, Inc.",
    metova,
    "And that's all there is on Daniel Sperry the remote web developer.",
    "I'm sorry to disappoint you but it seems we're all finished up here."
  ],
  suggestions: [
    {
      text: "Help me contact him.",
      action: 'contact'
    },
    {
      text: 'Thank you, have a good day',
      action: 'end'
    }
  ]
}