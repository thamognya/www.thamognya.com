use yew::prelude::*;

#[function_component(NavBar)]
pub fn navbar() -> Html 
{
    html! 
    {
        <>
            <div class={ "sticky top-0 bg-[#fff] opacity-90 container mx-auto max-w-3xl py-8" }> // think about py vs p
                <nav class={ "flex" }>
                    <div class={ "flex-none w-14" }>
                        <img class={ "hover:rotate-45" } src={ "../assets/logo.png" } alt={ "Logo" } /> // fix this later
                    </div>
                    <div class={ "flex-auto w-64" }>
                        <div class={ "flex space-x-4 justify-end" }>
                            <h1>{ "Yew" }</h1>
                            <h1>{ "Yew" }</h1>
                            <h1>{ "Yew" }</h1>
                            <h1>{ "Yew" }</h1>
                            <h1>{ "Yew" }</h1>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    }
}
