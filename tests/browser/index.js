import { Component } from '../../src'

class Card extends Component {
  render() {
    return `
      <slot></slot>

      <style>
        :host {
          background: #fff;
          border-radius: 2px;
          display: inline-block;
          height: auto;
          margin: 1rem;
          padding: 1rem;
          position: relative;
          width: 300px;
          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        }
      </style>
    `
  }
}

customElements.define('material-card', Card)
