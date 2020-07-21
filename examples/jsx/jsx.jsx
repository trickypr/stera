// eslint-disable-next-line no-unused-vars
import React from 'jsx-dom'

import { Component } from 'stera'

class Counter extends Component {
	state = {
		counter: 0
	}
	
	// constructor() {
	// 	super({ counter: 0 })
	// }

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
