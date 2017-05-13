import '../css/base.css'
import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component {
  render () {
    console.log("you're excellent");
    console.log("\n.-        -.\n| ,-. ,-.  |\n| |   | |  |\n| `-' `-|  |\n`-     ,| -'\n       `'    ")

    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));