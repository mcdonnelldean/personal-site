'use strict'

var React = require('react')
var TimerMixin = require('react-timers')

var HeroPanel = require('./heroPanel')

var jobTitles = [
  'Concept Realisation Expert',
  'Sun Shunner',
  'Bit manipulator',
  'Stream Wrangler',
  'Code Whisperer',
  'Binary Typist',
  'Data Collation Expert',
  'Mad Scientist'
]

var getRandomTitle = function () {
  function randomIndex (min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  var index = randomIndex(0, jobTitles.length - 1)

  return jobTitles[index]
}

module.exports = React.createClass({
  mixins: [TimerMixin()],

  getInitialState: function () {
    return {
      jobTitle: getRandomTitle()
    }
  },

  componentDidMount: function () {
    var that = this

    this.setInterval(function () {
      that.setState({
        jobTitle: getRandomTitle()
      })
    }, 3000)
  },

  render: function () {
    var jobTitle = this.state.jobTitle

    return (
      <div>
        <div className="shell">
          <HeroPanel jobTitle={jobTitle} />
        </div>
      </div>
    )
  }
})
