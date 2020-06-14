# Working with attributes

## Watching for changes to attributes
The default `Component` class doesn't watch for changes to the attributes to stop it. Insted you should use the `MutationComponent` class. It operates extends `Component` class so the same code will work in it.

## Retrieving data from attributes
Stera doesn't implement any custom props system, so you should just instead you should use the [attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) api. There are two methods you can use to access them, each with their pros and cons. Unfortunately, there are two options, the easier in the code and one is neater in html.

### Standard attributes
Standard attributes are clean in HTML, but they have to be accessed with the `getAttribute` function. 

```js{5}
import { MutationComponent, html } from 'https://unpkg.com/stera/dist/index.js'

class ProgressBar extends MutationComponent {
	render() {
		const progress = this.getAttribute('progress')

		return html`
			<div class="progress container">
				<div 
					class="progress bar" 
					style="width: ${progress}%"
					>
				</div>

				<style>
					:root {
						width: 100%;
					}

					.progress.container {
						width: 100%;
						background-color: #818AA350;
					}

					.progress.bar {
						width: 1%;
						height: 30px;
						background: #19539F;
					}
				</style>
			</div>
		`
	}
}
customElements.define('progress-bar', ProgressBar)
```

Then you can just use them in html.

```html
<progress-bar progress="29"></progress-bar>
```

### `data-` attributes
Data attributes are a bit messier in html but are cleaner in code, as it can be accessed as a variable.

```js{5}
import { MutationComponent, html } from 'https://unpkg.com/stera/dist/index.js'

class ProgressBar extends MutationComponent {
	render() {
		const { progress } = this.dataset

		return html`
			<div class="progress container">
				<div 
					class="progress bar" 
					style="width: ${progress}%"
					>
				</div>

				<style>
					:root {
						width: 100%;
					}

					.progress.container {
						width: 100%;
						background-color: #818AA350;
					}

					.progress.bar {
						width: 1%;
						height: 30px;
						background: #19539F;
					}
				</style>
			</div>
		`
	}
}
customElements.define('progress-bar', ProgressBar)
```
Then in html.
```html
<progress-bar data-progress="29"></progress-bar>
```
