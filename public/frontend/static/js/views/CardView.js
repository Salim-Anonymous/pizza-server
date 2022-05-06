import Topbar from "../../components/topbar.js";

export default class CardView {
    constructor() {
        document.title = 'Cart';
    }

    async getHtml() {
        let html = await new Topbar().getHtml();
        //language=HTML
        return `
      <div class="brochure">
        <div class="brochure__header">
          ${html}
        </div>
        ${html}
      </div>
    `;
    }
}