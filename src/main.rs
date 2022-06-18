// imports
use yew::prelude::*;
// file imports

#[function_component(App)]
fn app() -> Html 
{
    html!
    {
        <>
            <div class={ "min-h-screen min-w-screen bg-[#282828]" }>
                <h1 class={ "text-[#fbf1c7]" }>{ "Hello" }</h1>
            </div>
        </>
    }
}

fn main() 
{
    // start the app
    yew::start_app::<App>();
}
