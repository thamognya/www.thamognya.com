use yew::prelude::*;

#[function_component(Contact)]
pub fn contact() -> Html
{
    html! 
    {
        <>
            <div class={ "grid grid-cols-1 divide-y-[0px] gap-y-7 text-center sm:text-left" }>
                <div>
                    <h1 class={ "underline decoration-4 decoration-gray-700 text-2xl" }>
                        { "Contact Form" }
                    </h1>
                </div>
                <div class={ "px-20" }>
                    <hr /> // make the contact form top line
                    <form method={ "post" } action={ "https://airform.io/contact@thamognya.com" } class={ "bg-gray-50 text-gray-800 grid grid-cols-1 divide-y gap-y-5" }>
                        <input type={ "text" } name={ "name" } placeholder={ "Enter your email" } class={ "bg-gray-50 text-gray-800 resize rounded-sm" } />
                        <textarea name={ "message" } placeholder={ "Enter your message" } class={ "bg-gray-50 text-gray-800 resize rounded-sm" } />
                        <button>{ "Send your Message" }</button>
                    </form>
                </div>
            </div>
        </>
    }
}