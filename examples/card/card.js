import {Component} from 'https://unpkg.com/stera/dist/index.js'

class Card extends Component {
	render() {
		const container = document.createElement('div')

		const slot = document.createElement('slot')
		container.appendChild(slot)

		const style = document.createElement('style')
		style.textContent = `
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
    `
		container.appendChild(style)

		return container
	}
}

customElements.define('material-card', Card)
