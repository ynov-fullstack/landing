import { GET_HEADER } from "../../graphql/queries";
import "./index.css";

class Header extends HTMLElement {
  
  constructor() {
    super();
  }
  
  connectedCallback() {

    fetch("http://localhost:1337/graphql", {
      method: "POST",
      body: JSON.stringify(GET_HEADER),
      headers: {
        "Content-Type":"Application/json"
      }
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        const menu = data.data.headerMenu.data.attributes.item.map((element) => (
          `<li class="nav__item">
            <a href="http://localhost:56257${element.link}">
              ${element.name}
            </a>
          </li>`
        ))
        this.innerHTML = `
          <header class="header__main">
            <a href="">
              <img src="" alt=""/>
            </a>
            <div class="header__menu">
              <ul class="header__nav">
                ${menu.join("")}
              </ul>
            </div>
          </header>
        `
      })
      .catch(err => console.log(err))
  }
}

customElements.define('header-component', Header);