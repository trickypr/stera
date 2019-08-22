import { Component, html, define } from "../../src"

class Test extends Component {
  render() {
    return html`
      <h1>Test</h1>
    `
  }
}

define('test-el', Test)
