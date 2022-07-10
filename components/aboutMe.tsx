import { Box } from '@chakra-ui/react'

function About() {
    return (
        <>
            <div className="md:grid md:grid-cols-2 gap-0 md:min-h-screen">
                <div className="bg-bg-bg dark:bg-bg-fg text-3xl md:text-4 flex flex-col items-center justify-center p-5">
                    <AboutRight />
                </div>
                <div className="bg-bg-fg dark:bg-bg-bg text-3xl md:text-4 text-bg-bg dark:text-bg-fg p-5">
                    <AboutLeft />
                </div>
            </div>
        </>
    )
}

const AboutRight = () => {
    return (
        <>
            <div className="container mx-auto px-11">
                <p className="leading-tight max-w-5xl mx-auto text-3xl lg:text-3xl text-bg-fg dark:text-bg-bg">
                    <strong>Hey, my name is Thamognya Kodi. </strong>I am a high
                    school student who likes operating systems, kernels, and
                    machine learning. I am a proxy maintainer and contributor at
                    Gentoo and I hope to contribute to more opensource.
                </p>
            </div>
        </>
    )
}

const AboutLeft = () => {
    // testing box
    return <Box>tmp add dog model here</Box>
}

export default About
