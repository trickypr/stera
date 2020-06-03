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

export const html = (h, ...values) => {
	const wrapper = document.createElement('div')
	
	wrapper.innerHTML = h.reduce((result, s, i) => result + s + (values[i] ? values[i] : '') , '').replace('\t', '')

	if (wrapper.childElementCount != 1) throw new Error('HTML can\'t have more or less than one root node.')

	return wrapper.children[0]
}
