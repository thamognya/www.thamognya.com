import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import React from 'react'
import dynamic from 'next/dynamic'
import { ChakraProvider } from '@chakra-ui/react'
// files
import '../styles/globals.sass'
const LazyScrollObserver = dynamic(() => import('../utils/scrollObserver'), {
    ssr: true
})

const LazyMain = dynamic(() => import('../components/layouts/main'), {
    ssr: true
})

const LazyNavbar = dynamic(() => import('../components/navbar'), {
    ssr: true
})

const LazyFooter = dynamic(() => import('../components/footer'), {
    ssr: true
})

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <LazyMain>
                <LazyScrollObserver>
                    <ThemeProvider enableSystem={true} attribute="class">
                        <ChakraProvider>
                            <LazyNavbar />
                            <Component {...pageProps} />
                            <LazyFooter />
                        </ChakraProvider>
                    </ThemeProvider>
                </LazyScrollObserver>
            </LazyMain>
        </>
    )
}

export default MyApp
