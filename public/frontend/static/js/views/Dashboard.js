import AbstractView from "./AbstractView";

export default class extends AbstractView{
  constructor(params){
    super(params);
    this.setTitle("Dashboard");
  }
  
  async getHtml(){
    return (`
    <div>
        <p>This is the text for dashboard </p>
    </div>
    `);
  }

}
