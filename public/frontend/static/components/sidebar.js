import AbstractView from "../js/views/AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
    }
    getUserSideMenu(user){
        return [
            {
                title:"pizzas",
                href:"/",
                icon:<i class="fa-solid fa-pizza-slice"></i>
            },{
                title:"cart",
                href:"/cart",
                icon:<i class="fa-solid fa-shopping-cart"></i>
            }
        ]
    }

    async getHtml() {
        // language=HTML
        return (`<div>
            <nav class="sidebar">
                <ul class="sidebar-nav">
                    ${(this.getUserSideMenu(null).map(item => {
                        return (
                                <li class="nav-item">
                                    <a href=${item.href} class="nav-link">
                                        ${item.icon}
                                    </a>
                                </li>
                        );
                    }))}
                </ul>
            </nav>
        </div>
            `);
    }

}