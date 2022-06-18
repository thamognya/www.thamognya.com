// imports
use yew::prelude::*;
// file imports
mod router;

#[function_component(App)]
fn app() -> Html 
{
    html!
    {
        <>
            // sample navbar
            <h1>{ "Hello" }</h1>
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
