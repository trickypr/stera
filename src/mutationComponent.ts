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

import { Component } from './component.js'

export class MutationComponent extends Component {
	mutationConfig: MutationObserverInit = { attributes: true }
	private observer: MutationObserver

	constructor(state?: any, mutationConfig?: MutationObserverInit) {
		super(state)

		if (mutationConfig) this.mutationConfig = mutationConfig

		this.observer = new MutationObserver(() => this.update())
		this.observer.observe(this, this.mutationConfig)
	}
}
