import AbstractView from "./AbstractView.js";
import CardContainer from "../../components/datasets/cardContainer.js";
import Topbar from "../../components/topbar.js";
import Data from "../../components/datasets/data.js";
export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle('Home')
    }
    async getData(){
        return await new Data().getContentData();
    }
    async getHtml(){
        let data = await this.getData();
        let cart=[];
        // language=HTML
        return `
        <div class="homepage">
            ${await new Topbar().getHtml()}
            <div class="content">
                ${await new CardContainer().getHtml(data,cart)}
            </div>
            <div class="cart">
                ${await new CardContainer().getHtml(cart)}
            </div>
        </div>
        `
    }

}