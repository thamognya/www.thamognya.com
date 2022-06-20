use yew::prelude::*;

#[function_component(NavBar)]
pub fn navbar() -> Html 
{
    html! 
    {
        <>
            <div class={ "sticky top-0 bg-gray-50 opacity-90 container mx-auto max-w-3xl py-8" }> // think about py vs p
                <nav class={ "flex" }>
                    <div class={ "flex-none w-20" }>
                        <a href="/">
                            //<img class={ "hover:rotate-45" } src={ "../assets/logo.png" } alt={ "Logo" } /> // fix this later
                            <h1 class={ "hover:font-bold" }>{ "Thamognya" }</h1>
                        </a>
                    </div>
                    <div class={ "flex-auto w-64" }>
                        <div class={ "flex space-x-4 justify-end" }>
                            <a href={ "/" } target={ "_blank" }>
                                <h1 class={ "hover:underline decoration-4 decoration-gray-700" }>
                                    { "Home" }
                                </h1>
                            </a>
                            <a href={ "/contact" } target={ "_blank" }>
                                <h1 class={ "hover:underline decoration-4 decoration-gray-700" }>
                                    { "Contact" }
                                </h1>
                            </a>
                            <a href={ "https://git.thamognya.com/" } target={ "_blank" }>
                                <h1 class={ "hover:underline decoration-4 decoration-gray-700" }>
                                    { "Git" }
                                </h1>
                            </a>
                            <a href={ "https://github.com/Thamognya" } target={ "_blank" }>
                                <h1 class={ "hover:underline decoration-4 decoration-gray-700" }>
                                    { "Github" }
                                </h1>
                            </a>
                            <a href={ "https://blog.thamognya.com/" } target={ "_blank" }>
                                <h1 class={ "hover:underline decoration-4 decoration-gray-700" }>
                                    { "Blog" }
                                </h1>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    }
}
