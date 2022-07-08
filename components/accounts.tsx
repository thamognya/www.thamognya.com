import React from 'react'
// file imports
import Social from './socialMedia'

const About: React.FC = () => {
    return (
    <>
        <section className="flex flex-col bg-bg-bg py-20 text-3xl md:text-4">
            <div className="container mx-auto px-11">
                <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl text-bg-fg">
                    <strong>Hey, my name is Thamognya Kodi. </strong> 
                    I am a HighSchool student who likes Operating System, kernels, and Machine Learning. 
                    Currently I am an proxy maintainer and contributor at Gentoo. 
                    Additionally I also am an tor relay provider and mirror provider to other distrobutions
                </p>
            </div>
            <div className="container mx-auto px-11 text-center mt-28 text-bg-fg">
                <h2 className="font-bold">Social Media</h2>
                <div className="mt-10">
                    <Social />
                </div>
            </div>
        </section>
    </>
    )
}

export default About