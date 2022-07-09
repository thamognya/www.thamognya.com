import { ThemeProvider } from 'next-themes'

// files
import ScrollObserver from '../utils/scrollObserver'
import Main from '../components/layouts/main'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <ThemeProvider enableSystem={true} attribute="class">
                <ScrollObserver>
                    <Main>
                        <Component {...pageProps} />
                    </Main>
                </ScrollObserver>
            </ThemeProvider>
        </>
    )
}

export default MyApp
