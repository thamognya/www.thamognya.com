use yew::prelude::*;

#[function_component(NavBar)]
pub fn navbar() -> Html 
{
    html! 
    {
        <>
            <h1>{ "NavBar" }</h1>
            <nav>
                <div class={ "container mx-auto" }>
                    <h1>{ "NavBar" }</h1>
                </div>
            </nav>
        </>
    }
}
