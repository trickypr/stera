# Using states
Like all major frameworks, we have the idea of states. States are a variable that, when updated, will recall the `render` function. 

```js
import { Component, html } from 'https://unpkg.com/browse/stera/dist/index.js'

class Counter extends Component {
	render() {
		const dom = html`
			<div>
				<h1>The button has been pressed ${this.state.counter} time${this.state.counter != 1 ? 's' : ''}</h1>
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

This render function shows that you can reference state using `this.state` and redefine it using `this.setState`. However, running this code will throw an error something like this:

```
this.state is undefined
```

We need to pass the state into the super function for it to work properly.

```js{5}
import { Component, html } from 'https://unpkg.com/browse/stera/dist/index.js'

class Counter extends Component {
	constructor() {
		return { count: 1 }
	}
	
	render() {
		const dom = html`
			<div>
				<h1>The button has been pressed ${this.state.counter} time${this.state.counter != 1 ? 's' : ''}</h1>
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

Now the code will work as intended.
