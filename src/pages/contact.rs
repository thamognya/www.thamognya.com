use yew::prelude::*;

#[function_component(Contact)]
pub fn contact() -> Html
{
    html! 
    {
        <>
            <div>
                <h1>{ "Contact Form" }</h1>
                <p>{ "Please dont spam" }</p>
                <hr />
                <form method={ "post" } action={ "https://airform.io/contact@thamognya.com" }>
                    <input type={ "text" } name={ "name" } placeholder={ "Enter your email" } />
                    <textarea name={ "message" } placeholder={ "Enter your message" } />
                    <button>{ "Send your Message" }</button>
                </form>
            </div>
        </>
    }
}