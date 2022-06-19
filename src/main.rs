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
                <div class={ "container h-screen max-w-3xl mx-auto bg-[#ff0000]" }> // debugging color #ff0000
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
