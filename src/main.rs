// imports
use yew::prelude::*;
// file imports
#[path = "./components/navbar.rs"] mod navbar;
#[path = "./components/footer.rs"] mod footer;
#[path = "./router.rs"] mod router;

#[function_component(App)]
fn app() -> Html 
{
    html! 
    {
        <>
            <div class={ "font-mono bg-[#fff]" }> // change this later
                <div class={ "container h-screen max-w-3xl mx-auto" }> // debugging color #ff0000
                    // anything that should be shown on every page
                    // should be put here above or below router
                    // anything to be shown on specific page should be 
                    // put in router
                    <navbar::NavBar /> // navbar sticky
                    <router::Router /> // everything else
                    <footer::Footer /> // footer (maybe sticky?)
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
