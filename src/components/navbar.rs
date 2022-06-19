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
                        <a href="/">
                            <img class={ "hover:rotate-45" } src={ "../assets/logo.png" } alt={ "Logo" } /> // fix this later
                        </a>
                    </div>
                    <div class={ "flex-auto w-64" }>
                        <div class={ "flex space-x-4 justify-end" }>
                            <a href={ "/" }>
                                <h1 class={ "hover:underline decoration-4" }>
                                    { "Home" }
                                </h1>
                            </a>
                            <a href={ "/contact" }>
                                <h1 class={ "hover:underline decoration-4" }>
                                    { "Contact" }
                                </h1>
                            </a>
                            <a href={ "https://git.thamognya.com/" }>
                                <h1 class={ "hover:underline decoration-4" }>
                                    { "Git" }
                                </h1>
                            </a>
                            <a href={ "https://github.com/Thamognya" }>
                                <h1 class={ "hover:underline decoration-4" }>
                                    { "Github" }
                                </h1>
                            </a>
                            <a href={ "https://blog.thamognya.com/" }>
                                <h1 class={ "hover:underline decoration-4" }>
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
