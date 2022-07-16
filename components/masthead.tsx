// masthead of the website
import React, { useRef, useContext, useState, useCallback } from 'react'
import Image from 'next/image'
import { ArrowDownIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { ScrollContext } from '../utils/scrollObserver'
// file imports

const Masthead: React.FC = () => {
    const refContainer = useRef<HTMLDivElement>(null)

    const { scrollY } = useContext(ScrollContext)

    let progress = 0

    const { current: elContainer } = refContainer

    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

    return (
        <>
            <div
                ref={refContainer}
                className="min-h-screen flex flex-col items items-center justify-center sticky top-0 -z-10"
                style={{
                    transform: `translateY(-${progress * 20}vh)`
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-screen h-screen object-cover"
                >
                    <source src="/assets/bg.mp4" type="video/mp4" />
                </video>
                <div className="p-12 z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-bg-fg text-center flex-1 flex items-center justify-center flex-col">
                    <h1 className="mb-6 text-4xl xl:text-5xl">Thamognya</h1>
                    <h2 className="mv-2 text-2xl xl:text-3xl">
                        {'<'}OS Enthusiast{'/>'}
                    </h2>
                </div>
                <div className="flex-grow-0 pb-20 md:pb-20 transition-all duration-1000 z-10 transition-all duration-1000">
                    <MdOutlineKeyboardArrowDown className="hover:scale-[9] fill-bg-fg font-light scale-[7]" />
                </div>
            </div>
        </>
    )
}

export default Masthead
