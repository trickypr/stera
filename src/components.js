export default class Component extends HTMLElement {  
  constructor(isClosed = false) {
    super()

    this.shadow = this.attachShadow({mode: isClosed  ? 'closed': 'open'})
    this.update()
  }

  async update() {
    const html = await this.render()

    this.shadow.innerHTML = ''

    if (typeof html === 'string') this.shadow.innerHTML = html
    else this.shadow.appendChild(html)
  }
}
