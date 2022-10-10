import '../styles/globals.sass'
import { ChakraProvider } from '@chakra-ui/react'
import Main from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SplashLoader from '../components/splashLoader'

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps, router }: any) {
    const rrouter = useRouter()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        rrouter.events.on('routeChangeError', e => setLoading(false))
        rrouter.events.on('routeChangeStart', e => setLoading(false))
        rrouter.events.on('routeChangeComplete', e => setLoading(true))
        return () => {
            rrouter.events.off('routeChangeError', e => setLoading(false))
            rrouter.events.off('routeChangeStart', e => setLoading(false))
            rrouter.events.off('routeChangeComplete', e => setLoading(true))
        }
    }, [rrouter.events])

    return (
        <>
            {loading ? (
                <SplashLoader />
            ) : (
                <ChakraProvider>
                    <Main router={router}>
                        <AnimatePresence
                            exitBeforeEnter
                            initial={true}
                            onExitComplete={() => {
                                if (typeof window !== 'undefined') {
                                    window.scrollTo({ top: 0 })
                                }
                            }}
                        >
                            <Component {...pageProps} />
                        </AnimatePresence>
                    </Main>
                </ChakraProvider>
            )}
        </>
    )
}

export default MyApp
