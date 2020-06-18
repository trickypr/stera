import{Component,html}from"https://unpkg.com/stera/dist/index.js";class Counter extends Component{constructor(){super({count:1}),this.update()}render(){console.log(this.state);const t=html`
			<div>
				<h1>${this.state.count}</h1>
				<button class="increase">Increase counter</button>
			</div>
		`;return t.getElementsByClassName("increase")[0].onclick=(()=>this.setState({...this.state,count:this.state.count+1})),t}}customElements.define("counter-el",Counter);