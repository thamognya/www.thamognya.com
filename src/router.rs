// imports
use yew::prelude::*;
use yew_router::prelude::*;
// file imports
#[path = "./pages/index.rs"] mod index;
#[path = "./pages/contact.rs"] mod contact;
#[path = "./pages/projects.rs"] mod projects;
#[path = "./pages/experiences.rs"] mod experiences;
#[path = "./pages/awards.rs"] mod awards;
#[path = "./pages/404.rs"] mod error;
// routes that I want to use
# [derive(Clone, Routable, PartialEq)]
enum Route 
{
    #[at("/")]
    Index,
    #[at("/contact")]
    Contact,
    #[at("/projects")]
    Projects,
    #[at("/experiences")]
    Experiences,
    #[at("/awards")]
    Awards,
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
                <index::Index />
            </>
        },
        Route::Contact => html!
        {
            <>
                <contact::Contact />
            </>
        },
        Route::Projects => html!
        {
            <>
                <projects::Projects />
            </>
        },
        Route::Experiences => html!
        {
            <>
                <experiences::Experiences />
            </>
        },
        Route::Awards => html!
        {
            <>
                <awards::Awards />
            </>
        },
        Route::NotFound => html!
        {
            <>
                <error::Error />
            </>
        },
        _ => html!
        {
            <>
                <index::Index />
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