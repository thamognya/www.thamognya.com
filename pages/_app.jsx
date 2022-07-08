import '../styles/globals.css'
// files
import ScrollObserver from '../utils/scrollObserver'
import Main from '../components/layouts/main'

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <ScrollObserver>
                <Main>
                    <Component {...pageProps} />
                </Main>
            </ScrollObserver>
        </>
    )
}

export default MyApp
