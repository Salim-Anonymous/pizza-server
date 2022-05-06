import MainView from "./views/MainView.js";
import CardView from "./views/CardView.js";
export const mainContentRouter = async ()=>{
    const routes = [
        {path:"/",
            view:MainView
        },
        {
            path:"/cart",
            view:CardView
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
    document.querySelector("#content").innerHTML = await view.getHtml();
}