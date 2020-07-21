// eslint-disable-next-line no-unused-vars
import React from 'jsx-dom'

import { Component } from 'stera'

function customElement(title) {
	return (element) => customElements.define(title, element)
}

function state(stateValue) {
	return element => 
		element.prototype.constructor = function() {
			super(stateValue)
		}
}

@customElement('counter-el')
class Counter extends Component {
	render() {
		return (
			<div>
				
			</div>
		)
	}
}

