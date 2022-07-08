// masthead of the website
import React from 'react'
import Image from 'next/image'
import { ArrowDownIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
// file imports

const Masthead: React.FC = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items items-center justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-screen h-screen object-cover"
                >
                    <source src="/assets/bg.mp4" type="video/mp4"/>
                </video>
                <div className="p-12 z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] font-bold text-center flex-1 flex items-center justify-center flex-col">
                    <h1 className="mb-6 text-4xl xl:text-5xl">Thamognya</h1>
                    <h2 className="mv-2 text-2xl xl:text-3xl">
                        {'<'}OS Enthusiast{'/>'}
                    </h2>
                </div>
                <div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 z-10">
                    <ChevronDownIcon className="hover:scale-[9] font-light scale-[7]" />
                </div>
            </div>
        </>
    )
}

export default Masthead
