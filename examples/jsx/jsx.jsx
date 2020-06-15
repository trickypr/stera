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
