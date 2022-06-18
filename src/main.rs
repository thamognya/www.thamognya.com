// imports
use yew::prelude::*;
// file imports

#[function_component(App)]
fn app() -> Html 
{
    html!
    {
        <>
            <div class={ "min-h-screen min-w-screen" }>
            </div>
        </>
    }
}

fn main() 
{
    // start the app
    yew::start_app::<App>();
}
