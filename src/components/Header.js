class Header extends HTMLElement {
  
  constructor() {
    super();
  }
  
  connectedCallback() {
    console.log("test");
    this.innerHTML = `
      <header>
      <p>This is a header</p>
      </header>
    `
  }
}

customElements.define('header-component', Header);