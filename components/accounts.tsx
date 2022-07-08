import React from 'react'
// file imports
import Social from './socialMedia'

const About: React.FC = () => {
    return (
        <>
            <section className="flex flex-col bg-bg-bg py-20 text-3xl md:text-4 h-screen md:h-screen">
                <div className="container mx-auto px-11">
                    <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl text-bg-fg">
                        <strong>Hey, my name is Thamognya Kodi. </strong>I am a
                        high school student who likes operating systems, kernels,
                        and machine learning. Currently, I am a developer
                        and contributor at Gentoo. Additionally, I am a Tor
                        relay provider and mirror provider to other
                        Linux and BSD distros.
                    </p>
                </div>
                <div className="container mx-auto px-11 bg-bg-bg text-center mt-28 text-bg-fg">
                        <h2 className="font-bold">Social Media</h2>
                        <div className=" mt-10">
                            <Social />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
