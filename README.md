<div align="center">

# Stera

[![CodeFactor](https://www.codefactor.io/repository/github/trickypr/stera/badge)](https://www.codefactor.io/repository/github/trickypr/stera)
![npm](https://img.shields.io/npm/v/stera)
![npm](https://img.shields.io/npm/dm/stera)

A tiny javascript library for native web components with minimal overhead
</div>

## Getting started
You can import stera from npm through a build tool or import it with esmodules.
```js
// Intall with 'npm i stera@1.0.0'
import { Component } from 'stera'
// or import as an esmodule
import { Component } from 'https://unpkg.com/browse/stera@1.0.0/dist/index.js'
```

Then you an write a component in a similar way to you would write a stateful react component.

```js
import { Component, html } from 'stera'

class HelloWorld extends Component {
	render() {
		return html`
			<h1>Hello world</h1>
		`
	}
}
```

Then you can declare it with `customElements.define`.
```js 
customElements.define('hello-world', HelloWorld)
```

Now you can insert `hello-world` into any html.

## License
Stera, A tiny, native web component library built around the shadow dom
Copyright (C) 2020  TrickyPR

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
