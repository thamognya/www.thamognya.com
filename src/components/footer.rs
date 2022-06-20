use yew::prelude::*;
use chrono::prelude::*;

#[function_component(Footer)]
pub fn footer() -> Html
{
    html! 
    {
        <>
            <div class={ "static bottom-0 bg-[#fff] opacity-90 container mx-auto max-w-3xl py-8" }> // think about py vs p
                <footer>
                    <div class={ "flex justify-center space-x-4" }>
                        //<h1>{ format!("Copyright {} Name. All Rights Reserved.", current_date.year()) }</h1>
                        <h1>{ "Copyright Thamognya Kodi. All Rights Reserved." }</h1>
                    </div>
                </footer>
            </div>
        </>
    }
}