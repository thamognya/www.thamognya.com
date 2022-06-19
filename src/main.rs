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
                <div class={ "container h-screen max-w-3xl mx-auto" }> // debugging color #ff0000
                    <navbar::NavBar />
                    <h1>{ "Yew" }</h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
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
