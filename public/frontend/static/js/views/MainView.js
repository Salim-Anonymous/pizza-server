import Topbar from "../../components/topbar.js";

export default class BrochureView{
  constructor() {
    document.title = 'Brochure';
  }

  async getHtml() {
    let html = await new Topbar().getHtml();
    //language=HTML
    return `
      <div class="brochure">
        <div class="brochure__header">
          ${html}
        </div>
        <div class="brochure__grid">
            <div class="mainCard">
                <div class="mainCardHeader"></div>
                <div class="mainCardContent">
                    <div class="miniCard"></div>
                    <div class="miniCard"></div>
                    <div class="miniCard"></div>
                    <div class="miniCard"></div>
                    <div class="miniCard"></div>
                    <div class="miniCard"></div>
                    <div class="miniCard"></div>
                    <div class="miniCard"></div>
                    <div class="miniCard"></div>
                    <div class="miniCard"></div>
                </div>
            </div>
        </div>
      </div>
    `;
  }
}