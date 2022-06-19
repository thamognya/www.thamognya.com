// imports
use yew::prelude::*;
// file imports
#[path = "./components/navbar.rs"] mod navbar;

#[path = "./router.rs"] mod router;

#[function_component(App)]
fn app() -> Html 
{
    html! 
    {
        <>
            <div class={ "bg-[#fff]" }> // change this later
                <div class={ "container h-screen max-w-xl mx-auto" }>
                    <navbar::NavBar />
                    <router::Router />
                </div>
            </div>
        </>
    }
}

fn main() 
{
    // start the app
    yew::start_app::<App>();
}
