'use strict'

var React = require('react')

module.exports = React.createClass({
  render: function () {
    var jobTitle = this.props.jobTitle

    return (
      <hgroup>
        <h1>Dean McDonnell</h1>
        <h2>{jobTitle}</h2>
        <h3>(Software Developer)</h3>
        <h4>
          <a href="https://twitter.com/mcdonnelldean" target="_blank">
            Twitter
          </a>
          <span> | </span>
          <a href="https://github.com/mcdonnelldean" target="_blank">
            Github
          </a>
        </h4>
      </hgroup>
    )
  }
})
