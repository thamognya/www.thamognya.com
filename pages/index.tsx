import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
// file imports
const LazyMasthead = dynamic(() => import('../components/masthead'), {
    ssr: true
})
const LazyAbout = dynamic(() => import('../components/aboutMe'), {
    ssr: true
})
const LazySkills = dynamic(() => import('../components/skills'), {
    ssr: true
})

const Home: NextPage = () => {
    return (
        <>
            <LazyMasthead />
            <LazyAbout />
            <LazySkills />
        </>
    )
}

export default Home
