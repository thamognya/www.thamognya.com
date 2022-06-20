use yew::prelude::*;

#[function_component(Contact)]
pub fn contact() -> Html
{
    html! 
    {
        <>
            <div class={ "grid grid-cols-2 divide-y" }>
                <div>
                    <h1 class={ "underline decoration-4 decoration-gray-700 text-2xl" }>
                        { "Contact Form" }
                    </h1>
                </div>
                <div>
                    <hr class={ "bg-gray-800" } />
                    <form method={ "post" } action={ "https://airform.io/contact@thamognya.com" } class={ "bg-gray-50 text-gray-800" }>
                        <input type={ "text" } name={ "name" } placeholder={ "Enter your email" } class={ "bg-gray-50 text-gray-800" } />
                        <textarea name={ "message" } placeholder={ "Enter your message" } class={ "bg-gray-50 text-gray-800" } />
                        <button>{ "Send your Message" }</button>
                    </form>
                </div>
            </div>
        </>
    }
}