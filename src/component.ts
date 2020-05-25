/*
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
*/

export interface IComponent {
	shadow: ShadowRoot
	render: () => HTMLElement
	state: any
}

export class Component extends HTMLElement implements IComponent {
	shadow: ShadowRoot

	private storedState;

	constructor() {
		super()

		this.shadow = this.attachShadow({
			mode: 'open'
		})
		// setTimeout(() => this.update(), 1)
		this.update()
	}

	get state() {
		return this.storedState
	}

	set state(newState) {
		this.storedState = newState
		this.update()
	}

	update() {
		const internalEl = this.render()
		
		if (!(internalEl instanceof HTMLElement)) throw new Error('The render function doesn\'t return an HTMLElement')

		this.shadow.innerHTML = ''
		this.shadow.append(internalEl)
	}

	render() {
		const warnEl = document.createElement('p')
		warnEl.innerText = 'This component does not contain any content'
		console.warn('A component does not contain any content')

		return warnEl
	}
}
