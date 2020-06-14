# Getting started
Stera is designed to be a small, simple library, meaning you can drop it into any project and go.

## Installation
There are two options to install Stera in your project. You can either use a unpkg with `esmodules`:

```js
// Note: you will need to add type="module" to the script tag
import {} from 'https://unpkg.com/browse/stera/dist/index.js'
```

or you an install it via npm:

```sh
npm install stera
# or
yarn add stera
```

```js
import {} from 'stera'
```

## Creating a component
Stera uses class-based components. There are two classes that can be extended. There is the standard `Component` class and `MutationComponent`. We will go over `MutationComponent` later.

```js
import { Component } from 'https://unpkg.com/browse/stera/dist/index.js'

class HelloWorld extends Component {
	render() {
		const helloWorld = document.createElement('h1')
		helloWorld.innerText = 'Hello world'

		return helloWorld
	}
}
```

The render function must return a `HTMLElement` javascript object. However, writing code using `createElement` is a pain. That is why we have the `html` template generator that lets you wright normal html.

```js
import { Component, html } from 'https://unpkg.com/browse/stera/dist/index.js'

class HelloWorld extends Component {
	render() {
		return html`
			<h1>Hello world</h1>
		`
	}
}
```

You then need to give the element a name. You can do this using the `customElements.define` function.

```js{11}
import { Component, html } from 'https://unpkg.com/browse/stera/dist/index.js'

class HelloWorld extends Component {
	render() {
		return html`
			<h1>Hello world</h1>
		`
	}
}

customElements.define('hello-world', HelloWorld)
```

::: details A note on naming elements
Unfortunately all custom element names have to have a `-` in them. This means you can't just give an element the name of something like `card`.
:::

You can now use this element by adding `<hello-world></hello-world>` to the webpage that includes the script.
