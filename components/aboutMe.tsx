import React from 'react'
import { FaLinkedin, FaGithub, FaBlogger } from 'react-icons/fa'

import { SiGitea } from 'react-icons/si'

import { CgWebsite } from 'react-icons/cg'

import { BsFiles } from 'react-icons/bs'

// file imports

const About: React.FC = () => {
    return (
        <>
            <section className="flex flex-col bg-bg-bg dark:bg-bg-fg py-20 text-3xl md:text-4 min-h-screen">
                <div className="container mx-auto px-11">
                    <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl text-bg-fg dark:text-bg-bg">
                        <strong>Hey, my name is Thamognya Kodi. </strong>I am a
                        high school student who likes operating systems,
                        kernels, and machine learning. Currently, I am a
                        developer and contributor at Gentoo.
                    </p>
                </div>
                <div className="container mx-auto px-11 bg-bg-bg dark:bg-bg-fg text-center pt-28 text-bg-fg">
                    <h2 className="font-bold">Social Media</h2>
                    <div className=" pt-10">
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 h-half grid-cols-1 gap-y-5 gap-x-5 place-items-center lg:h-half-screen md:h-half-screen sm:min-h-half-screen">
                            <a
                                href="https://www.thamognya.com"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 md:px-10 px-8 hover:scale-125 rounded-full bg-bg-gray text-bg-fg bg-opacity-75 flex items-center"
                            >
                                <CgWebsite />
                                <h1 className="pl-2">Website</h1>
                            </a>
                            <a
                                href="https://github.com/Thamognya"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 md:px-10 px-10 hover:scale-125 rounded-full bg-bg-gray text-bg-fg bg-opacity-75 flex items-center"
                            >
                                <FaGithub />
                                <h1 className="pl-2">Github</h1>
                            </a>
                            <a
                                href="https://git.thamognya.com"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 md:px-10 px-12 hover:scale-125 rounded-full bg-bg-gray text-bg-fg  bg-opacity-75 flex items-center"
                            >
                                <SiGitea />
                                <h1 className="pl-2">Gitea</h1>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/thamognya"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 md:px-8 px-5 hover:scale-125 rounded-full bg-bg-gray text-bg-fg bg-opacity-75 flex items-center"
                            >
                                <FaLinkedin />
                                <h1 className="pl-2">LinkedIn</h1>
                            </a>
                            <a
                                href="https://blog.thamognya.com"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 md:px-12 px-16 hover:scale-125 rounded-full bg-bg-gray text-bg-fg bg-opacity-75 flex items-center"
                            >
                                <FaBlogger />
                                <h1 className="pl-2">Blog</h1>
                            </a>
                            <a
                                href="https://www.thamognya.com/cv.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="py-5 md:px-16 px-20 hover:scale-125 rounded-full bg-bg-gray text-bg-fg bg-opacity-75 flex items-center"
                            >
                                <BsFiles />
                                <h1 className="pl-2">CV</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
