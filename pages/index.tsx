import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// file imports
import Masthead from '../components/masthead'
import Footer from '../components/footer'
import Projects from '../components/accounts'

const Home: NextPage = () => {
    return (
        <>
            <Masthead />
            <Projects />
        </>
    )
}

export default Home
