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
            <div>
                <div class={ "min-h-screen min-w-screen bg-[#282828]" }>
                    // navbar
                    <navbar::NavBar />
                    // rest of the stuff
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
