/**
 * Scratch
 * A basic project for demonstrating new techniques
 * on thereactway.io
 */

import React from 'react'

import 'style/application'

let App = React.createClass({

  render() {
    return (
      <div>
        <h1>Success!</h1>
        <p>The application launched</p>
      </div>
    )
  }

})

React.render(<App />, document.getElementById('app'))
