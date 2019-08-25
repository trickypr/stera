# Stera
A tiny library for writing shadow dom components in javascript.

## Why use it? 
The goal of this project is to provide a shadow dom component libary and nothing else. As of such, this library is tiny and modular. If you have tree shaking set up, it could only take 1kb to set up and run just the base class.

## Todo
- [ ] Basic component API 
- [ ] Write docs
- [ ] Add CSS templating
- [ ] Build some examples
- [ ] Add e2e tests
- [ ] Set up github actions 

## Getting started
Stera is designed to be dropped into a basic es6 application. You just need to extend the base component library and declare it. The folowing code is all that is required to declare and use a custom element.

```js 
import { Component, html } from 'stera'

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

```

```html
<!DOCTYPE html>
<html>
<body>
  <material-card>
    <h1>Hello world</h1>
  </material-card>
  <material-card>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio pellentesque. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Pharetra convallis posuere morbi leo. Habitant morbi tristique senectus et. Fames ac turpis egestas integer eget aliquet nibh praesent. At risus viverra adipiscing at in tellus integer feugiat. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Duis ut diam quam nulla. Et molestie ac feugiat sed lectus.</p>
  </material-card>

  <style>
    body {
      display: flex
    }
  </style>

  <script src="bundle.js"></script>
</body>
</html>

```