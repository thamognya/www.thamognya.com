use yew::prelude::*;

#[function_component(Footer)]
pub fn footer() -> Html
{
    html! 
    {
        <>
            <br />
            <br />
            <hr />
            <div class={ "static bottom-0 bg-slate-50 opacity-90 container mx-auto max-w-3xl py-8" }> // think about py vs p
                <footer>
                    <div class={ "flex justify-center space-x-4 text-center sm:truncate" }>
                        <h1>{ format!("Copyright {:?} {}. All Rights Reserved.", 2022, "Thamognya Kodi") }</h1>
                    </div>
                </footer>
            </div>
        </>
    }
}