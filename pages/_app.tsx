import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import React from 'react'
// files
import ScrollObserver from '../utils/scrollObserver'
import Main from '../components/layouts/main'
import '../styles/globals.sass'

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Main>
                <ScrollObserver>
                    <ThemeProvider enableSystem={true} attribute="class">
                        <Component {...pageProps} />
                    </ThemeProvider>
                </ScrollObserver>
            </Main>
        </>
    )
}

export default MyApp
