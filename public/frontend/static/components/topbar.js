export default class{
    constructor() {
    }

    async getHtml(){
        // language=HTML
        return (`
            <div class="top-bar">
                <div class="logo-holder logo-9">
                    <a href="">
                        <span><i class="fas fa-bell"></i></span>
                        <h3>Pizza</h3>
                    </a>
                </div>
                <div class="search-box">
                    <button class="btn-search"><i class="fas fa-search"></i></button>
                    <input type="text" class="input-search" placeholder="Type to Search...">
                </div>
            </div>
        `)
    }
}