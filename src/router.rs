// imports
use yew::prelude::*;
use yew_router::prelude::*;
// file imports

// routes that I want to use
# [derive(Clone, Routable, PartialEq)]
enum Route 
{
    #[at("/")]
    Index,
    #[at("/contact")]
    Contact,
    #[at("/projects")]
    ProjectHomePage,
    #[at("/projects/:id")]
    Projects {id: u8},
    #[at("/experience")]
    ExperienceHomePage,
    #[at("/experience/:id")]
    Experience {id: u8},
    #[at("/awards")]
    AwardsHomePage,
    #[at("/awards/:id")]
    Awards {id: u8},
    #[not_found]
    #[at("/404")]
    NotFound,
}

// this is the route matching function
fn switch(route: &Route) -> Html
{
    match route
    {
        Route::Index => html!
        {
            <>
                <h1>{ "Hello" }</h1>
            </>
        },
        Route::Contact => html!
        {
            <>
                <h1>{ "Contact" }</h1>
            </>
        },
        Route::ProjectHomePage => html!
        {
            <>
                <h1>{ "Projects List" }</h1>
            </>
        },
        Route::Projects {id} => html!
        {
            <>
                <p>{ format!("Projects {}", id) }</p>
            </>
        },
        Route::ExperienceHomePage => html!
        {
            <>
                <h1>{ "Experience List" }</h1>
            </>
        },
        Route::Experience { id } => html!
        {
            <>
                <p>{ format!("Experience {}", id) }</p>
            </>
        },
        Route::AwardsHomePage=> html!
        {
            <>
                <h1>{ "Awards List" }</h1>
            </>
        },
        Route::Awards { id } => html!
        {
            <>
                <p>{ format!("Awards {}", id) }</p>
            </>
        },
        Route::NotFound => html!
        {
            <>
                <p>{ "404 Error: Link Not Found" }</p>
            </>
        },
        _ => html!
        {
            <>
                <h1>{ "Hello" }</h1>
            </>
        }
    }
}

// this allows for the rendering of pages after the url is changed
// it is public to be used in main.rs
#[function_component(Router)]
pub fn router() -> Html 
{
    html! 
    {
        <>
            <BrowserRouter>
                <Switch<Route> render={Switch::render(switch)} />
            </BrowserRouter>
        </>
    }
}