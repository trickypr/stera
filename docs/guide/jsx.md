# Using jsx
::: details A note on build tools
When working with JSX, you are going to need a build tool. I am going to leave this up to you. If you want something quick to get started, take a look into [parcel](https://parceljs.org).
:::

Jsx is more powerful than the included `html` templating string. If you take a look back to when we were using states, we had to go through all kinds of loops to bind a function to an element. 

```js
const dom = html`
			<div>
				<h1>
					The button has been pressed ${this.state.counter} 
					time${this.state.counter != 1 ? 's' : ''}
				</h1>
				<button class="increase">Increase counter</button>
			</div>
		`

dom.getElementsByClassName('increase')[0].onclick = () => 
	this.setState({...this.state, count: this.state.count + 1})

return dom
```

This can be simplified considerably by using JSX, where everything just works inline.

```jsx
return (
	<div>
		<h1>
			The button has been pressed {this.state.counter} 
			time{this.state.counter != 1 ? 's' : ''}
		</h1>
		<button 
			onClick={() => this.setState({...this.state, count: this.state.count + 1})}
		>Increase counter</button>
	</div>
)
```

This code is easier to write, easier to debug, and easier to read through later. There is better support for it in most IDEs because it is used by [React](https://reactjs.org).

## Working with jsx
Stera doesn't include an implementation of jsx. Instead, because stera requires a `HTMLElement` input, you can use a library that converts jsx to `HTMLElement`. The one I found that works is [jsx-dom](https://www.npmjs.com/package/jsx-dom), however, there are other libraries that do a similar thing like [dom-chef](https://www.npmjs.com/package/dom-chef). You just have to include the library in your file, wrangle your build tool, and check it out.

```jsx
import React from 'jsx-dom'

import { Component } from 'stera'

class Counter extends Component {
	constructor() {
		super({ counter: 0 })
	}

	render() {
		return (
			<div>
				<h1>The button has been clicked {this.state.counter} time{this.state.count == 1 ? '': 's'}</h1>
				<button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Click me</button>
			</div>
		)
	}
}
customElements.define('counter-el', Counter)
```
