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
