import AbstractView from "./AbstractView.js";
import CardContainer from "../../components/datasets/cardContainer.js";
import Topbar from "../../components/topbar.js";
import Data from "../../components/datasets/data.js";
export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle('Home')
    }

    async getHtml(){

        // language=HTML
        return `
        <div class="homepage">
            
        </div>
        `
    }

}