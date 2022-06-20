use yew::prelude::*;

#[function_component(Index)]
pub fn index() -> Html 
{
    html! 
    {
        <>
            <div class={ "grid grid-cols-1 divide-y-[0px] gap-y-5" }>
                <div>
                    <h1 class={ "underline decoration-4 decoration-gray-700 text-2xl text-center sm:text-left" }>
                        { "Welcome" }
                    </h1>
                </div>
                <div class={ "px-10" }>
                    <p>
                        { "Hey Welcome to the website. My name is Thamognya Kodi, I am currently a sophmore in high school." }
                    </p>
                </div>
            </div>
        </>
    }
}