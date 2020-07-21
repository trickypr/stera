export function define(title: string) {
	return (element) => customElements.define(title, element)
}
