// eslint-disable-next-line no-unused-vars
import React from 'jsx-dom'
import { Component } from 'stera'

import examples from '../examples'

class ExampleLinks extends Component {
	render() {
		return (
			<div>
				{
					examples.static.map(el => (
						<square-link url={`./examples/${el.name}`}>{el.name}</square-link>
					))
				}

				{
					examples.parcel.map(el => (
						<square-link url={`./examples/${el.name}`}>{el.name}</square-link>
					))
				}
			</div>
		)
	}
}
customElements.define('example-links', ExampleLinks)

class Link extends Component {
	render() {
		return (
			<a 
				href={this.getAttribute('url')}
				style={{ display: 'block', textDecoration: 'none', color: 'black', background: '#e5e5e5', padding: '5px', margin: '10px', borderRadius: '3px' }}
			>
				<slot></slot>
			</a>
		)
	}
}
customElements.define('square-link', Link)
