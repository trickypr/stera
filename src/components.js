export default class Componet extends HTMLElement {
  constructor(isClosed = false) {
    super()

    this.shadow = this.attachShadow({mode: isClosed  ? 'closed': 'open'})
    this.update()

    this.attributeObserver = new MutationObserver(this.attributesChange.bind(this))
    this.attributeObserver.observe(this, { attributes: true })
  }

  async update() {
    this.shadow.innerHTML = await this.render()
  }

  /**
   * Binds functions to an event
   * 
   * Event types
   * * `attributes`: Changes to the html atributes
   * 
   * @param {string} type The event you want to bind to
   * @param {function} func The function you want to have the event bound to
   */
  bindListener(type, func) {
    switch (type.toLowerCase()) {
      case 'attributes':
        if (!this.attributeChangeFuncs) this.attributeChangeFuncs = []
        this.attributesChange.push(func)
        break
    
      default:
        console.error(`The type '${type}' is not a valid event`)
        break
    }
  }
  
  /**
   * ! Do not replace this function. Use `bindListener` to create an event listener
   * 
   * Listen for attributes changes in JS
   */
  attributesChange(mutilationList) {
    if (this.attributeChangeFuncs) this.attributesChange.forEach(func => func(mutilationList))
  }
}