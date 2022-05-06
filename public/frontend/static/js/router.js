import Homepage from "./views/Homepage.js";
import Sidebar from "../components/sidebar.js";

export const router = async ()=>{
    const routes = [
        {path:"/",
            view:Homepage
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