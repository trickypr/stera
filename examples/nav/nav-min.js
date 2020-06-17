import{Component,html}from"https://unpkg.com/stera/dist/index.js";class NavBar extends Component{render(){return html`
			<nav>
				<slot></slot>

				<style>
					nav {
						width: 100vw;
						height: 60px;
						overflow: none;
					}
				</style>
			</nav>
		`}}customElements.define("nav-bar",NavBar);class NavItem extends Component{render(){const t=this.getAttribute("active");return html`
			<a href="${this.getAttribute("href")}" class="${1==t||""==t?"active":""}">
				<slot></slot>

				<style>
					/* Style the links inside the navigation bar */
					a {
						float: left;
						color: #f2f2f2;
						background-color: #212121;
						text-align: center;
						padding: 14px 16px;
						margin: 5px;
						text-decoration: none;
						font-size: 17px;
					}

					/* Change the color of links on hover */
					a:hover {
						background-color: #ddd;
						color: black;
					}

					/* Add a color to the active/current link */
					a.active {
						background-color: black;
						color: white;
					}
				</style>
			</a>
		`}}customElements.define("nav-item",NavItem);