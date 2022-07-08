import '../styles/globals.css'
// files
import ScrollObserver from '../utils/scrollObserver'
import Main from '../components/layouts/main'

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <ScrollObserver>
                <Component {...pageProps} />
            </ScrollObserver>
        </>
    )
}

export default MyApp
