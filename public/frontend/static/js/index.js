import Homepage from "./views/general/Homepage";
import Sidebar from "../components/sidebar.js";
import Cart from "./views/general/Cart.js";

const navigateTo = url=>{
  history.pushState(null, null, url)
  router().then(r => console.log(r));
}
const router = async ()=>{
  const routes = [
    {path:"/",
      view:Homepage
    },{
     path:"/cart",
      view:Cart
    }
  ]

  //potentially matching routes
  const potentialMatches = routes.map(route=>{
    return {
      route: route,
      isMatch: location.pathname === route.path
    }
  })

  //viewing the found route
  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    }
  }
  const view = new match.route.view();
  console.log(view);

  document.querySelector("#app").innerHTML = await view.getHtml();
  document.querySelector('#navbar').innerHTML = await new Sidebar().getHtml();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded",()=>{
  document.body.addEventListener("click", e =>{
    if(e.target.matches("[nav-link]")){
      console.log('trapped link')
      e.preventDefault();
      navigateTo(e.target.href)
    }
  })
  router().then(r => console.log(r));
})



