// masthead of the website
import React from 'react'
import Image from 'next/image'

const Masthead: React.FC = () => {
    return (
    <>
        <div className="min-h-screen flex flex-col items items-center justify-center">
            <video autoPlay loop muted playsInline className="absolute w-screen h-screen object-cover">
                <source src="/bg.mp4" type="video/mp4" />
            </video>
            <div className="p-12 font-bold z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
                <h2 className="mv-2 text-2xl xl:text-3xl">{"<======>"}</h2>
                <h1 className="mb-6 text-4xl xl:text-5xl text-[#5c6085]">Thamognya</h1>
                <h2 className="mv-2 text-2xl xl:text-3xl">{"<======>"}</h2>
            </div>
        </div>
    </>
    )
}

export default Masthead