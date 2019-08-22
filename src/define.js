/**
 * Define custom elements
 * 
 * @param {string} name The name of the custom element. Must have a dash
 * @param {Component} element The extention of the `Component` class
 */
export default function define(name, element) {
  if (!name.includes('-')) throw new Error('The name of a custom class needs to contain a \'-\'')

  customElements.define(name, element)
}
