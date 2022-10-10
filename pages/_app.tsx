import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'

import '../styles/globals.sass'
import Main from '../components/layouts/main'

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps, router }: any) {
    return (
        <>
            <Chakra cookies={pageProps.cookies}>
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
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </Main>
            </Chakra>
        </>
    )
}

export default MyApp
