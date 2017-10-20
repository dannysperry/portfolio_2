const fine = [
  "- Developed internally used rails engine as a gem that laid out the foundation of the work for a CMS’s framework to build new projects quicker.",
  "- Added test suite to Rails 3 legacy e-comm app",
  "- Promoted to mid level developer and helped junior developers."
].join("\n") + "\n"

const metova = [
  "- Web Developer/Project Lead on 1-2 person teams with 2 - 4 month retainers usually.",
  "- One year long contract with AngularJS on a team of 10 developers.",
  "-   Continuous Deployment on AWS.",
  "-   Agile story points, daily scrum meetings and weekly iteration meetings",
  "- Project Lead/Scrum master on 2 projects with 2-3 developers."
].join("\n") + "\n"

export default {
  id: 'experience',
  messages: [
    "He started out as a 'junior ruby developer' at FINE Design Group in Portland, OR.",
    "This is what I have listed for FINE Design Group.",
    fine,
    "He wanted to work remotely full-time and crossed paths with Metova, Inc.",
    "And here's Metova's.",
    metova,
    "Sorry to disappoint you but it seems we're all finished here."
  ],
  suggestions: [
    {
      text: "Messaging him sounds good!",
      action: 'contact'
    },
    {
      text: 'No thank you, have a good day',
      action: 'end'
    }
  ]
}