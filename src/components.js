export default class Componet extends HTMLElement {  
  constructor(isClosed = false) {
    super()

    this.shadow = this.attachShadow({mode: isClosed  ? 'closed': 'open'})
    this.update()
  }

  async update() {
    this.shadow.innerHTML = await this.render()
  }
}
