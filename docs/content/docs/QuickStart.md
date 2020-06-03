# Quick Start
Stera is designed to be easy to plug into any project. Unlike react or vue, it is best suited for dropping into static html. 

{{< hint info >}}
This is a general guide. If you are coming from React you might find the [Quick Start For React Developers](../quickstartforreactdevs) guide more helpful.
{{< /hint >}}

## Installation
You can install via npm or use a cdn. 

```shell
npm install stera
# or
yarn add stera
```

If you want to use a cdn like `unpkg`, you need to import your script as a `module`.

```html
<script src="./script.js" type="module"></script>
```

Then you can import it as an esmodule.

```js
import { /* Modules you want */ } from 'https://unpkg.com/browse/stera@1.0.0-rc2/dist/index.js'
```

## Creating a component
In stera components are build around classes. Each component can extend the be
Components are created by extending the `Component` class. Similar to react, there is a `render` function that must be created. This render element must return a `HTMLElement`. 

```js
import { Component } from 'stera'

class HelloWorld extends Component {
	render() {
		const helloWorldEl = document.createElement('h1')
		helloWorldEl.innerText = 'Hello world!'

		return helloWorldEl
	}
}

customElements.define('hello-world', HelloWorld)
```

You can write JSX like code with template strings. Stera contains a tagged template `html` that converts a string to a `HTMLElement`.

```js
import { Component, html } from 'stera'

class HelloWorld extends Component {
	render() {
		return html`
			<h1>Hello world!</h1>
		`
	}
}

customElements.define('hello-world', HelloWorld)
```

In vscode you can highlight code inside of template strings with the [lit-plugin](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin).

## Using states
States are similar to states in react. They are a variable that can have any value. You have to change states with the `setState` function. Unlike react, you have to pass the initial state into the start of the constructor so it is created properly.

```js
import { Component, html } from '../../dist/index.js'

class Counter extends Component {
	constructor() {
		// When first initializing a state you need to pass it into super
		super({
			count: 1
		})

		this.update()
	}

	render() {
		console.log(this.state)
		const dom = html`
			<div>
				<h1>${this.state.count}</h1>
				<button class="increase">Increase counter</button>
			</div>
		`

		dom.getElementsByClassName('increase')[0].onclick = () => 
			this.setState({...this.state, count: this.state.count + 1})

		return dom
	}
}
customElements.define('counter-el', Counter)
```


