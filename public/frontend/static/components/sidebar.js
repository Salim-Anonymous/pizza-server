import getUser from '../js/user/user.js'
export default class Sidebar {
    constructor() {
    }

    async getHtml() {
        let user = await getUser()
        if(user.userRole.admin===true){
            // language=HTML
            return (`
            <div class="navigation">
                <div class="theList">
                    <ul>
                        <li class="list active">
                            <a href="/" data-link>
                            <span class="icon">
                                <i class="fa-solid fa-shop"></i>
                            </span>
                                <span class="title">Pizza</span>
                            </a>
                        </li>
                        <li class="list">
                            <a href="/cart" data-link>
                            <span class="icon">
                              <i class="fa fa-cart-shopping"></i>
                            </span>
                                <span class="title">Cart</span>
                            </a>
                        </li>
                        <li class="list">
                            <a href="/addPizza" data-link>
                            <span class="icon">
                              <i class="fa fa-pizza-slice"></i>
                            </span>
                                <span class="title">Add Pizza</span>
                            </a>
                        </li>
                        <li class="list">
                            <a href="/businesses" data-link>
                            <span class="icon">
                              <i class="fa fa-user"></i>
                            </span>
                                <span class="title">Businesses</span>
                            </a>
                        </li>
                        <li class="list">
                            <a href="/orders" data-link>
                            <span class="icon">
                              <i class="fa fa-note-sticky"></i>
                            </span>
                                <span class="title">Orders</span>
                            </a>
                        </li>
                        <li class="list">
                            <a href="/messages" data-link>
                            <span class="icon">
                              <i class="fa fa-message"></i>
                            </span>
                                <span class="title">Messages</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="logout">
                    <a href="" data-link>
                        <i class="fa fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </a>
                </div>
            </div>
        `);
        }else if(user.role.business===true){
            // language=HTML
            return (`
                <div class="navigation">
                    <div>
                        <ul>
                            <li class="list active">
                                <a href="/" data-link>
                            <span class="icon">
                                <i class="fa-solid fa-pizza-slice"></i>
                            </span>
                                    <span class="title">Pizza</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="/cart" data-link>
                            <span class="icon">
                              <i class="fa fa-cart-shopping"></i>
                            </span>
                                    <span class="title">Cart</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="/businesses" data-link>
                            <span class="icon">
                              <i class="fa fa-user"></i>
                            </span>
                                    <span class="title">Businesses</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="/orders" data-link>
                            <span class="icon">
                              <i class="fa fa-note-sticky"></i>
                            </span>
                                    <span class="title">Orders</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="/messages" data-link>
                            <span class="icon">
                              <i class="fa fa-message"></i>
                            </span>
                                    <span class="title">Messages</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="logout">
                        <a href="" data-link>
                            <i class="fa fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </a>
                    </div>
                </div>
            `);

        }

    }

}