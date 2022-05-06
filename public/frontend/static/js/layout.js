import Sidebar from "../components/sidebar.js";

export default class layout {
    constructor() {
        this.sidebar = new Sidebar();
    }
        //language=HTML
    async render() {
        return (`
            <div class="layout">
                <div id="sidebar">
                    ${await this.renderSidebar()}
                </div>
                <div id="content">
                </div>
            </div>`
        );
    }

    async renderSidebar() {
        return await this.sidebar.getHtml();
    }
}