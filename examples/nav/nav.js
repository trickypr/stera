import { Component, html } from '../../dist/index.js'

class NavBar extends Component {
	render() {
		return html`
			<nav>
				<h1>Test</h1>	

				<style>
					:host {
						width: 100%;
					}

					nav {
						width: 100%;
						overflow: none;
					}
				</style>
			</nav>
		`
	}
}

customElements.define('nav-bar', NavBar)
