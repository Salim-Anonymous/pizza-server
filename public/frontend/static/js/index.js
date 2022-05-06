import {mainContentRouter} from "./mainContentRouter.js";
import Layout from "./layout.js";
const navigateTo = url=>{
  history.pushState(null, null, url)
  mainContentRouter().then(r => r)
}

function logout(){
  console.log("logout")
}


window.addEventListener("popstate", mainContentRouter);

document.addEventListener("DOMContentLoaded",async () => {
  document.querySelector("#app").innerHTML = await new Layout().render();
  const list = document.querySelectorAll(".list");
  function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activeLink));
  console.log("layout loaded");
  document.querySelector("#logout").addEventListener("click", logout);

  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href)
    }
  })
  mainContentRouter().then(r => r);
})
