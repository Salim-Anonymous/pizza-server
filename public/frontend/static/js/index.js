import {router} from "./router.js";

const navigateTo = url=>{
  history.pushState(null, null, url)
  router().then(r => console.log(r));
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded",()=>{
  document.body.addEventListener("click", e =>{
    if(e.target.matches("[nav-link]")){
      e.preventDefault();
      navigateTo(e.target.href)
    }
  })
  router().then(r => console.log(r));
})
