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
            <h1>{ "Hello" }</h1> //navbar
            <router::Router />
        </>
    }
}

fn main() 
{
    yew::start_app::<App>();
}
