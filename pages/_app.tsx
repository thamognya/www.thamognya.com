import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import React from 'react'
// files
import ScrollObserver from '../utils/scrollObserver'
import Main from '../components/layouts/main'
import '../styles/globals.sass'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Main>
                <ScrollObserver>
                    <ThemeProvider enableSystem={true} attribute="class">
                        <Navbar />
                        <Component {...pageProps} />
                        <Footer />
                    </ThemeProvider>
                </ScrollObserver>
            </Main>
        </>
    )
}

export default MyApp
