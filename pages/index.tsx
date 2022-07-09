import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// file imports
import Masthead from '../components/masthead'
import Footer from '../components/footer'
import About from '../components/aboutMe'
import Skills from '../components/skills'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
    return (
        <>
            <Navbar />
            <Masthead />
            <About />
            <Skills />
            <Footer />
        </>
    )
}

export default Home
