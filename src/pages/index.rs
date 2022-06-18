use yew::prelude::*;

#[function_component(Index)]
pub fn index() -> Html
{
    html!
    {
        <>
            <h1>{ "Header" }</h1>
            <h1>{ "Projects" }</h1>
            <h1>{ "Experiences" }</h1>
            <h1>{ "Awards" }</h1>
        </>
    }
}