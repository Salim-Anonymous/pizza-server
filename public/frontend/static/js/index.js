import Dashboard from './views/Dashboard.js';

const navigateTo = url=>{
  history.pushState(null, null, url)
  router().then(r => console.log(r + 'router called'));
}

const router = async ()=>{
  const routes = [
    {path:"/",
      view:Dashboard
    },{
      path:"/app",
      view:()=>console.log('app loaded')
    }
  ]

  //potential matching
  const potentialMatches = routes.map(route=>{
    return {
      route: route,
      isMatch: location.pathname === route.path
    }
  })
  
  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    }
  }

  const view = new match.route.view();
  console.log('view init');

  document.querySelector("#app").innerHTML = await view.getHtml();

  console.log(view);
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded",()=>{
  document.body.addEventListener("click", e =>{
    if(e.target.matches("[data-link]")){
      e.preventDefault();
      navigateTo(e.target.href)
    }
  })

  router().then(r => console.log(r + 'message'));
})
