import { Component, html } from "../../src"

class Test extends Component {
  render() {
    return html`
      <h1>Test</h1>
    `
  }
}

customElements.define('test-el', Test)
