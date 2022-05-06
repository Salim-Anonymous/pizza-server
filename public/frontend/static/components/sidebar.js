import AbstractView from "../js/views/AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
    }

    async getHtml() {
        // language=HTML
        return (`<div>
            <nav class="navbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="/" class="nav-link" nav-link>
                            <i class="fa-solid fa-pizza-slice"></i>Home
                        </a>
                    </li>
                    <li class="nav-item" >
                        <a href="/cart" class="nav-link" nav-link>
                            <i class="fa-solid fa-cart-shopping"></i>Cart
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link" nav-link>
                            Setting
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
            `);
    }

}