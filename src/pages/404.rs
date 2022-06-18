use yew::prelude::*;

#[function_component(Error)]
pub fn error() -> Html
{
    html!
    {
        <>
            <h1>{ "404 Error: Page not found" }</h1>
        </>
    }
}