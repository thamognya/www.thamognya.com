// imports
use yew::prelude::*;
// file imports
#[path = "./router.rs"] mod router;
#[path = "./components/navbar.rs"] mod navbar;

#[function_component(App)]
fn app() -> Html 
{
    html!
    {
        <>
            // sample navbar
            <navbar::NavBar />
            // get the router from the router module
            <router::Router />
        </>
    }
}

fn main() 
{
    // start the app
    yew::start_app::<App>();
}
